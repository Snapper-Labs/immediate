package app

import (
	"context"
	"errors"
	"fmt"
	"io/ioutil"
	"sort"
	"strings"
	"time"

	"github.com/buildkite/go-buildkite/v3/buildkite"
	"github.com/palantir/stacktrace"
	"gopkg.in/yaml.v2"
)

// PipelineBranchSpec defines a branch/pipeline slug combo
type PipelineBranchSpec struct {
	Branch       string `yaml:"branch"`
	PipelineSlug string `yaml:"pipeline_slug"`
}

// Pipeline is the config for a pipeline
type Pipeline struct {
	PipelineSlug string               `yaml:"pipeline_slug"`
	Inputs       []PipelineBranchSpec `yaml:"inputs"`
}

// GetPipeline gets the configuration for one pipeline.
func GetPipeline(configPath string, targetPipeline string) (*Pipeline, error) {
	data, err := ioutil.ReadFile(configPath)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Failed to read %s", configPath)
	}

	var pipelines []Pipeline
	err = yaml.Unmarshal(data, &pipelines)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Failed to load yaml for data %s", data)
	}

	for _, p := range pipelines {
		if p.PipelineSlug == targetPipeline {
			return &p, nil
		}
	}

	return nil, stacktrace.NewError("Target not found")
}

// PipelineBuild extends Build with the slug of the pipeline its associated with
type PipelineBuild struct {
	buildkite.Build
	PipelineSlug string
}

// ReleaseCandidates groups ReleaseCandidate's
type ReleaseCandidates struct {
	Builds []ReleaseCandidate `json:"builds"`
}

type releaseBuild struct {
	PipelineBuild
	WasDeployed bool
	DeployedAt  *time.Time
}

// GetReleases transforms input and output builds into a set of release candidates.
func GetReleases(targetPipelineBuilds []PipelineBuild, sourcePipelineBuilds []PipelineBuild) []ReleaseCandidate {
	targetPipelineBuildsMap := map[string]buildkite.Build{}
	for _, targetBuild := range targetPipelineBuilds {
		version := *targetBuild.Commit
		targetPipelineBuildsMap[version] = targetBuild.Build
	}
	releaseBuilds := []releaseBuild{}
	for _, inputBuild := range sourcePipelineBuilds {
		inputBuildVersion := *inputBuild.Commit
		wasDeployed := false
		var deployedAt *time.Time
		if targetBuild, ok := targetPipelineBuildsMap[inputBuildVersion]; ok {
			deployedAt = &targetBuild.CreatedAt.Time
			wasDeployed = true
		}
		releaseBuild := releaseBuild{
			PipelineBuild: inputBuild,
			WasDeployed:   wasDeployed,
			DeployedAt:    deployedAt,
		}
		releaseBuilds = append(releaseBuilds, releaseBuild)
	}

	sort.Slice(releaseBuilds, func(i, j int) bool {
		return releaseBuilds[i].CreatedAt.After(releaseBuilds[j].CreatedAt.Time)
	})

	return getReleaseCandidates(releaseBuilds)
}

func getReleaseCandidates(releaseBuilds []releaseBuild) []ReleaseCandidate {
	foundLatest := false
	foundLastDeployed := false
	rcs := []ReleaseCandidate{}

	for _, releaseBuild := range releaseBuilds {
		rc := ReleaseCandidate{
			Commit:       *releaseBuild.Commit,
			Branch:       *releaseBuild.Branch,
			PipelineSlug: releaseBuild.PipelineBuild.PipelineSlug,
			Date:         releaseBuild.CreatedAt.Format("02 Jan 06 15:04 MST"),
			PromotedAt:   releaseBuild.CreatedAt.Time,
			DeployedAt:   releaseBuild.DeployedAt,
		}

		displayVersion := (*releaseBuild.Commit)[:8]
		detailParts := []string{}

		// Label the build with Latest if it is the latest build that hasn't been deployed.
		if !foundLatest {
			if !releaseBuild.WasDeployed {
				detailParts = append(detailParts, "Latest")
				rc.Alias = "latest"
			}
			foundLatest = true
		}

		// Label the build with Rollback if it wasn't the last deploy, but was previously deployed.
		if releaseBuild.WasDeployed {
			if !foundLastDeployed {
				detailParts = append(detailParts, "Last Deploy")
				foundLastDeployed = true
			} else {
				detailParts = append(detailParts, "Rollback")
				rc.Alias = "rollback"
			}
		}

		detailParts = append(detailParts, releaseBuild.CreatedAt.Format("Jan 2 2006"))
		detail := strings.Join(detailParts, ", ")
		rc.Label = fmt.Sprintf("%s (%s)", displayVersion, detail)

		rcs = append(rcs, rc)
	}

	return rcs
}

// ReleaseCandidate represents a build that is a candidate for release in a target pipeline.
type ReleaseCandidate struct {
	PipelineSlug string
	// DeployedAt indicates the time that the build was deployed to the *target* pipeline
	DeployedAt *time.Time
	// PromotedAt indicates the time that the build was deployed to the *input* pipeline
	PromotedAt time.Time
	Commit     string
	Branch     string
	Date       string
	Label      string
	Alias      string
}

// VersionManager is the interface for the object that manages buildkite versions for deploy.
type VersionManager interface {
	GetReleaseCandidates(ctx context.Context, maxReleases int) ([]ReleaseCandidate, error)
	GetReleaseCandidate(ctx context.Context, commit string) (*ReleaseCandidate, error)
}

type versionManagerImpl struct {
	targetConfig    Pipeline
	targetInputs    []PipelineBranchSpec
	buildkiteClient BuildkiteClient
	orgSlug         string
}

// ErrNotFound not found error.
var ErrNotFound = errors.New("Resource was not found")

// GetReleaseCandidates is the interface implementation.
func (v *versionManagerImpl) GetReleaseCandidate(ctx context.Context, commit string) (*ReleaseCandidate, error) {
	chans := []chan pipelineBuildResult{}
	for _, inputConfig := range v.targetInputs {
		chans = append(chans, v.getPipelineBuilds(ctx, inputConfig.PipelineSlug, &buildkite.BuildsListOptions{Branch: inputConfig.Branch, Commit: commit}))
	}
	results := []PipelineBuild{}
	for _, resultChan := range chans {
		result := <-resultChan
		if result.err != nil {
			return nil, stacktrace.Propagate(result.err, "")
		}
		results = append(results, result.builds...)
	}
	if len(results) < 1 {
		return nil, ErrNotFound
	}

	build := results[0]

	return &ReleaseCandidate{
		Label:        "",
		Commit:       *build.Commit,
		Branch:       *build.Branch,
		PipelineSlug: build.PipelineSlug,
		Date:         build.CreatedAt.Format("02 Jan 06 15:04 MST"),
		PromotedAt:   build.CreatedAt.Time,
	}, nil
}

func (v *versionManagerImpl) GetReleaseCandidates(ctx context.Context, maxReleases int) ([]ReleaseCandidate, error) {
	targetResultChannel := v.getPipelineBuilds(ctx, v.targetConfig.PipelineSlug, &buildkite.BuildsListOptions{State: []string{"passed"}})
	sourceResultChannels := []chan pipelineBuildResult{}
	sourcePipelineBuilds := []PipelineBuild{}
	for _, inputPipeline := range v.targetInputs {
		sourceResultChannels = append(sourceResultChannels, v.getPipelineBuilds(ctx, inputPipeline.PipelineSlug, &buildkite.BuildsListOptions{Branch: inputPipeline.Branch, State: []string{"passed"}}))
	}

	targetResult := <-targetResultChannel
	if targetResult.err != nil {
		return nil, stacktrace.Propagate(targetResult.err, "")
	}
	targetPipelineBuilds := targetResult.builds

	for _, sourceResultChannel := range sourceResultChannels {
		sourceResult := <-sourceResultChannel
		if sourceResult.err != nil {
			return nil, stacktrace.Propagate(sourceResult.err, "")
		}
		sourcePipelineBuilds = append(sourcePipelineBuilds, sourceResult.builds...)
	}

	sort.Slice(sourcePipelineBuilds, func(i, j int) bool {
		return sourcePipelineBuilds[i].CreatedAt.After(sourcePipelineBuilds[j].Build.CreatedAt.Time)
	})

	rcs := GetReleases(targetPipelineBuilds, sourcePipelineBuilds)
	numReleases := maxReleases
	if numReleases > len(rcs) {
		numReleases = len(rcs)
	}

	return rcs[:numReleases], nil
}

type pipelineBuildResult struct {
	builds []PipelineBuild
	err    error
}

func (v *versionManagerImpl) getPipelineBuilds(ctx context.Context, pipelineSlug string, options *buildkite.BuildsListOptions) chan pipelineBuildResult {
	r := make(chan pipelineBuildResult)

	go func() {
		var builds []buildkite.Build
		if options.Branch != "" && strings.HasSuffix(options.Branch, "*") {
			branchPrefix := strings.TrimSuffix(options.Branch, "*")
			options.Branch = ""
			b, err := v.getBuildsForBranchPrefix(ctx, pipelineSlug, branchPrefix, options)
			if err != nil {
				r <- pipelineBuildResult{nil, stacktrace.Propagate(err, "")}
			}
			builds = b
		} else {
			b, err := v.buildkiteClient.GetBuilds(ctx, v.orgSlug, pipelineSlug, options)
			if err != nil {
				r <- pipelineBuildResult{nil, stacktrace.Propagate(err, "")}
			}
			builds = b
		}

		pipelineBuilds := []PipelineBuild{}
		for _, build := range builds {
			pipelineBuilds = append(pipelineBuilds, PipelineBuild{Build: build, PipelineSlug: pipelineSlug})
		}

		r <- pipelineBuildResult{pipelineBuilds, nil}
	}()

	return r
}

func (v *versionManagerImpl) getBuildsForBranchPrefix(ctx context.Context, pipelineSlug string, branchPrefix string, options *buildkite.BuildsListOptions) ([]buildkite.Build, error) {
	builds, err := v.buildkiteClient.GetBuilds(ctx, v.orgSlug, pipelineSlug, options)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Failed to fetch pipeline builds")
	}
	filteredBuilds := []buildkite.Build{}
	for _, build := range builds {
		if strings.HasPrefix(*build.Branch, branchPrefix) {
			filteredBuilds = append(filteredBuilds, build)
		}
	}
	return filteredBuilds, nil
}

// NewVersionManager creates a new version manager.
func NewVersionManager(targetConfig Pipeline, buildkiteClient BuildkiteClient) VersionManager {
	targetInputs := []PipelineBranchSpec{}
	for _, i := range targetConfig.Inputs {
		targetInputs = append(targetInputs, PipelineBranchSpec{
			PipelineSlug: i.PipelineSlug,
			Branch:       i.Branch,
		})
	}
	return &versionManagerImpl{
		targetConfig:    targetConfig,
		targetInputs:    targetInputs,
		buildkiteClient: buildkiteClient,
		orgSlug:         "anchor-labs",
	}
}

// BuildkiteClient hides details of talking to buildkite.
type BuildkiteClient interface {
	GetBuilds(ctx context.Context, orgSlug string, pipelineSlug string, options *buildkite.BuildsListOptions) ([]buildkite.Build, error)
}

// BuildkiteClientImpl is the interface implementation.
type BuildkiteClientImpl struct {
	BuildkiteClient
	client *buildkite.Client
}

// GetBuilds gets builds.
func (c BuildkiteClientImpl) GetBuilds(ctx context.Context, orgSlug string, pipelineSlug string, options *buildkite.BuildsListOptions) ([]buildkite.Build, error) {
	builds, _, err := c.client.Builds.ListByPipeline(orgSlug, pipelineSlug, options)
	if err != nil {
		return nil, stacktrace.Propagate(err, "")
	}

	return builds, nil
}

// NewBuildkiteClient creates a new buildkite client.
func NewBuildkiteClient(client *buildkite.Client) BuildkiteClient {
	return BuildkiteClientImpl{client: client}
}
