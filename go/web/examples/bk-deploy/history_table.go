package main

import (
	"fmt"
	"time"

	"github.com/buildkite/go-buildkite/v3/buildkite"

	immgo "github.com/apkumar/immediate/go"
	immgo_web "github.com/apkumar/immediate/go/web"
)

func HistoryTableRow(ui *immgo.Renderer, build buildkite.Build, isDeploying *bool) {
	immgo_web.Row(ui)
	immgo_web.Text(ui, fmt.Sprintf("%s @ %s", (*build.Commit)[:8], *build.Branch))
	if *isDeploying {
		Spinner(ui)
	} else {
		if immgo_web.Button(ui, "deploy") {
			go func() {
				fmt.Println("Deploy now!!!")
				*isDeploying = true
				time.Sleep(1 * time.Second)
				*isDeploying = false
			}()
		}
	}

	immgo.Close(ui)
}

// HistoryTable renders the list of past builds, along with a button for each
// build that deploys it.
func HistoryTable(ui *immgo.Renderer, builds []buildkite.Build, isDeploying *bool) {
	immgo_web.TextStyle(ui, "Candidate Builds", "padding: 2px")
	for _, build := range builds {
		HistoryTableRow(ui, build, isDeploying)
	}
}
