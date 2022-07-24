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
	immgo_web.H1(container, immgo_web.H1Options{Content: "Deploy: core/production"})
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
	for _, build := range *builds {
		historyRow := immgo_web.GridRow(historyGrid)

		// TODO: ideally this would be a link - the markdown type in streamlit is a good solution i think
		shaCol := immgo_web.GridColumn(historyRow)
		immgo_web.Text(shaCol, immgo_web.TextOptions{Content: *build.Commit})
		dateCol := immgo_web.GridColumn(historyRow)
		immgo_web.Text(dateCol, immgo_web.TextOptions{Content: build.CreatedAt.String()})
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

	targetConfig, err := GetPipeline("/home/leigh_stewart_anchorlabs_com/workspace/anchorage2/.buildkite/pipelines/generated/pipelines.yaml", "deploy-core-production")
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
	b, _, err := buildkiteClient.Builds.ListByPipeline("anchor-labs", "deploy-core-production", &buildkite.BuildsListOptions{State: []string{"passed"}})
	if err != nil {
		fmt.Fprintln(os.Stderr, "Failed to create config")
		//immgo_web.Text(container, immgo_web.TextOptions{Content: "Error fetching builds"})
	}
	builds = &b

	immgo_web.Serve("localhost:8081", &app{})
}
