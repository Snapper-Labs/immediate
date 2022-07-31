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
)

func (this *App) Render(root *immgo.RenderNode, doc *immgo_web.Document) {
	container := immgo_web.Container(root)
	immgo_web.H1(container, immgo_web.H1Options{Content: "Deploy: core/development"})
	immgo_web.H2(container, immgo_web.H2Options{Content: "Select version to deploy"})

	grid := immgo_web.Grid(container)
	selectRow := immgo_web.GridRow(grid)
	selectCol := immgo_web.GridColumn(selectRow)
	choices := []string{}
	for _, rc := range *this.rcs {
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
	for i, build := range *this.builds {
		if i == 0 {
			headerRow := immgo_web.GridRow(historyGrid)
			shaCol := immgo_web.GridColumn(headerRow)
			authorCol := immgo_web.GridColumn(headerRow)
			dateCol := immgo_web.GridColumn(headerRow)

			immgo_web.Markdown(shaCol, immgo_web.MarkdownOptions{Content: "**Commit**"})
			immgo_web.Markdown(authorCol, immgo_web.MarkdownOptions{Content: "**Deployer**"})
			immgo_web.Markdown(dateCol, immgo_web.MarkdownOptions{Content: "**Date**"})
		}

		if i == len(*this.builds)-1 {
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
		prevCommit := *((*this.builds)[i+1].Commit)
		diffURL := fmt.Sprintf("https://github.com/anchorlabsinc/anchorage/compare/%s..%s", commit, prevCommit)

		shaColContents := fmt.Sprintf("[%s](%s) @ %s", (*build.Commit)[:7], diffURL, branch)
		immgo_web.Markdown(shaCol, immgo_web.MarkdownOptions{Content: shaColContents})
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

func (this *App) GetScriptTags() []string {
	return []string{
		`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>`,
		`<script type="module" src="https://md-block.verou.me/md-block.js"></script>`,
		`<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/shoelace.js"></script>	`,
	}
}
func (this *App) GetLinkTags() []string {
	return []string{
		`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">`,
		`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/themes/light.css" />`,
	}
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
