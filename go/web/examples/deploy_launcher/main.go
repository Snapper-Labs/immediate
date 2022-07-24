package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"os"
	"time"

	immgo "github.com/apkumar/immediate/go"
	immgo_web "github.com/apkumar/immediate/go/web"
	"github.com/buildkite/go-buildkite/v3/buildkite"
)

// submit simulates a network call to a backend.
func submit() {
	time.Sleep(5000 * time.Millisecond)
	log.Println("Deployed")
}

type app struct{}

func (this *app) Render(root *immgo.RenderNode, doc *immgo_web.Document) {
	container := immgo_web.Container(root)
	immgo_web.H1(container, immgo_web.H1Options{Content: "Deploy: core/development"})
	immgo_web.H2(container, immgo_web.H2Options{Content: "Select version to deploy"})

	grid := immgo_web.Grid(container)
	selectRow := immgo_web.GridRow(grid)
	selectCol := immgo_web.GridColumn(selectRow)
	choices := []string{}
	for _, rc := range *rcs {
		choices = append(choices, rc.Label)
	}
	immgo_web.Select(selectCol, immgo_web.SelectOptions{Choices: choices})
	buttonCol := immgo_web.GridColumn(selectRow)
	deploying := immgo.State(root, false)
	if immgo_web.Button(buttonCol, immgo_web.ButtonOptions{Label: "Deploy", Disabled: *deploying}) {
		go func() {
			*deploying = true
			submit()
			*deploying = false
		}()
	}

	immgo_web.H2(container, immgo_web.H2Options{Content: "History"})
	historyGrid := immgo_web.Grid(container)
	for i, build := range *builds {
		if i == 0 {
			headerRow := immgo_web.GridRow(historyGrid)
			shaCol := immgo_web.GridColumn(headerRow)
			authorCol := immgo_web.GridColumn(headerRow)
			dateCol := immgo_web.GridColumn(headerRow)

			immgo_web.Markdown(shaCol, immgo_web.MarkdownOptions{Content: "**Commit**"})
			immgo_web.Markdown(authorCol, immgo_web.MarkdownOptions{Content: "**Deployer**"})
			immgo_web.Markdown(dateCol, immgo_web.MarkdownOptions{Content: "**Date**"})
		}

		if i == len(*builds)-1 {
			break
		}

		historyRow := immgo_web.GridRow(historyGrid)
		shaCol := immgo_web.GridColumn(historyRow)
		authorCol := immgo_web.GridColumn(historyRow)
		dateCol := immgo_web.GridColumn(historyRow)

		author := ""
		if build.Source != nil {
			author = *build.Source
		}
		if build.Creator != nil {
			author = build.Creator.Email
		}

		commit := *build.Commit
		branch := *build.Branch
		prevCommit := *((*builds)[i+1].Commit)
		diffURL := fmt.Sprintf("https://github.com/anchorlabsinc/anchorage/compare/%s..%s", commit, prevCommit)

		shaColContents := fmt.Sprintf("[%s](%s) @ %s", (*build.Commit)[:7], diffURL, branch)
		immgo_web.Markdown(shaCol, immgo_web.MarkdownOptions{Content: shaColContents})
		immgo_web.Text(authorCol, immgo_web.TextOptions{Content: author})
		immgo_web.Text(dateCol, immgo_web.TextOptions{Content: build.CreatedAt.Format("2006-01-02 15:04:05")})
	}
}

var buildkiteAPIToken string
var buildkiteClient *buildkite.Client
var versionManager VersionManager
var builds *[]buildkite.Build
var rcs *[]ReleaseCandidate

func main() {
	flag.StringVar(&buildkiteAPIToken, "buildkite-api-token", os.Getenv("BUILDKITE_API_TOKEN"), "API token for buildkite")

	if len(buildkiteAPIToken) == 0 {
		fmt.Fprintln(os.Stderr, "Buildkite API token is missing")
		os.Exit(1)
	}

	buildkiteConfig, err := buildkite.NewTokenConfig(buildkiteAPIToken, false)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Failed to create config")
		os.Exit(1)
	}

	buildkiteClient = buildkite.NewClient(buildkiteConfig.Client())

	bkc := NewBuildkiteClient(buildkiteClient)

	targetConfig, err := GetPipeline("/home/leigh_stewart_anchorlabs_com/workspace/anchorage2/.buildkite/pipelines/generated/pipelines.yaml", "deploy-core-development")
	if err != nil {
		fmt.Fprintln(os.Stderr, "Failed to create config")
		os.Exit(1)
	}

	versionManager = NewVersionManager(*targetConfig, bkc)
	r, err := versionManager.GetReleaseCandidates(context.Background(), 10)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Failed to create config")
		os.Exit(1)
	}
	rcs = &r

	// TODO: hack - i just dont want this to continually refresh
	// but also note ideally it would refresh when:
	// a) i tell it to after launching a deploy (to get the latest in progress deploy)
	// b) periodically in case something changes in the background
	b, _, err := buildkiteClient.Builds.ListByPipeline("anchor-labs", "deploy-core-development", &buildkite.BuildsListOptions{State: []string{"passed"}})
	if err != nil {
		fmt.Fprintln(os.Stderr, "Failed to create config")
	}
	builds = &b

	immgo_web.Serve("localhost:8081", &app{})
}
