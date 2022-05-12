package main

import (
	"fmt"
	"time"

	"github.com/buildkite/go-buildkite/v3/buildkite"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

func HistoryTableRow(ui *immgo.Renderer, build buildkite.Build, isDeploying *bool) {
	immgo_web.Row(ui)
	immgo_web.Text(ui, fmt.Sprintf("commit: branch: %s", *build.Branch))
	if *isDeploying {
		Spinner(ui)
	} else {
		if immgo_web.Button(ui, "deploy") {
			go func() {
				fmt.Println("Deploy now!!!")
				*isDeploying = true
				time.Sleep(1*time.Second)
				*isDeploying = false
			}()
		}
	}

	immgo.Close(ui)
}

// HistoryTable renders the list of past builds, along with a button for each
// build that deploys it.
func HistoryTable(ui *immgo.Renderer, builds []buildkite.Build, isDeploying *bool) {
	immgo_web.Text(ui, "History of deploys")
	for _, build := range builds {
		HistoryTableRow(ui, build, isDeploying)
	}
}

