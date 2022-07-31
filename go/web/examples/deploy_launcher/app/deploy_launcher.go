package app

import (
	"context"
	"flag"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/buildkite/go-buildkite/v3/buildkite"
	immgo "github.com/snapper-labs/immediate/go"
	immgo_web "github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/intool"
)

func (this *App) Render(root *immgo.RenderNode, doc *immgo_web.Document) {
	container := intool.Container(root)
	intool.Markdown(container, intool.MarkdownOptions{Content: "# Deploy: core/development"})
	intool.Markdown(container, intool.MarkdownOptions{Content: "## Select version to deploy"})

	grid := intool.Grid(container)
	selectRow := intool.GridRow(grid)
	selectCol := intool.GridColumn(selectRow)
	choices := []string{}
	for _, rc := range *this.rcs {
		choices = append(choices, rc.Label)
	}
	intool.Select(selectCol, intool.SelectOptions{Choices: choices})
	buttonCol := intool.GridColumn(selectRow)
	deploying := immgo.State(root, false)
	if intool.Button(buttonCol, intool.ButtonOptions{Label: "Deploy", Disabled: *deploying}) {
		go func() {
			*deploying = true
			submit()
			*deploying = false
		}()
	}

	intool.Markdown(container, intool.MarkdownOptions{Content: "## History"})
	historyGrid := intool.Grid(container)
	for i, build := range *this.builds {
		if i == 0 {
			headerRow := intool.GridRow(historyGrid)
			shaCol := intool.GridColumn(headerRow)
			authorCol := intool.GridColumn(headerRow)
			dateCol := intool.GridColumn(headerRow)

			intool.Markdown(shaCol, intool.MarkdownOptions{Content: "**Commit**"})
			intool.Markdown(authorCol, intool.MarkdownOptions{Content: "**Deployer**"})
			intool.Markdown(dateCol, intool.MarkdownOptions{Content: "**Date**"})
		}

		if i == len(*this.builds)-1 {
			break
		}

		historyRow := intool.GridRow(historyGrid)
		shaCol := intool.GridColumn(historyRow)
		authorCol := intool.GridColumn(historyRow)
		dateCol := intool.GridColumn(historyRow)

		author := ""
		if build.Source != nil {
			author = *build.Source
		}
		if build.Creator != nil {
			author = build.Creator.Email
		}

		commit := *build.Commit
		branch := *build.Branch
		prevCommit := *((*this.builds)[i+1].Commit)
		diffURL := fmt.Sprintf("https://github.com/anchorlabsinc/anchorage/compare/%s..%s", commit, prevCommit)

		shaColContents := fmt.Sprintf("[%s](%s) @ %s", (*build.Commit)[:7], diffURL, branch)
		intool.Markdown(shaCol, intool.MarkdownOptions{Content: shaColContents})
		immgo_web.Text(authorCol, immgo_web.TextOptions{Content: author})
		immgo_web.Text(dateCol, immgo_web.TextOptions{Content: build.CreatedAt.Format("2006-01-02 15:04:05")})
	}
}

// submit simulates a network call to a backend.
func submit() {
	time.Sleep(5000 * time.Millisecond)
	log.Println("Deployed")
}

type App struct {
	builds *[]buildkite.Build
	rcs    *[]ReleaseCandidate
}

func (*App) GetToolkit() immgo_web.Toolkit {
	return &intool.Toolkit{}
}

func NewApp(buildkiteAPIToken string) (*App, error) {
	buildkiteConfig, err := buildkite.NewTokenConfig(buildkiteAPIToken, false)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Failed to create config")
		os.Exit(1)
	}

	buildkiteClient := buildkite.NewClient(buildkiteConfig.Client())

	bkc := NewBuildkiteClient(buildkiteClient)

	targetConfig, err := GetPipeline("/home/leigh_stewart_anchorlabs_com/workspace/anchorage2/.buildkite/pipelines/generated/pipelines.yaml", "deploy-core-development")
	if err != nil {
		fmt.Fprintln(os.Stderr, "Failed to create config")
		os.Exit(1)
	}

	versionManager := NewVersionManager(*targetConfig, bkc)

	r, err := versionManager.GetReleaseCandidates(context.Background(), 10)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Failed to create config")
		os.Exit(1)
	}

	b, _, err := buildkiteClient.Builds.ListByPipeline("anchor-labs", "deploy-core-development", &buildkite.BuildsListOptions{State: []string{"passed"}})
	if err != nil {
		return nil, err
	}

	return &App{&b, &r}, nil
}

func NewAppFromEnv() (*App, error) {
	var buildkiteAPIToken string

	flag.StringVar(&buildkiteAPIToken, "buildkite-api-token", os.Getenv("BUILDKITE_API_TOKEN"), "API token for buildkite")

	if len(buildkiteAPIToken) == 0 {
		fmt.Fprintln(os.Stderr, "Buildkite API token is missing")
		os.Exit(1)
	}

	return NewApp(buildkiteAPIToken)
}
