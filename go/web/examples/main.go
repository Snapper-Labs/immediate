package main

import (
	"fmt"
	"net/url"

	immgo "github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
	sevengui "github.com/snapper-labs/immediate/go/web/examples/7gui"
	prdiff "github.com/snapper-labs/immediate/go/web/examples/pr_diff"
	toolkitdemo "github.com/snapper-labs/immediate/go/web/examples/toolkit-demo"
	"github.com/snapper-labs/immediate/go/web/intool"
)

type app struct{}

func (this *app) Render(ui *immgo.RenderNode, doc *web.Document) {
	if !intool.Initialize(ui) {
		intool.Text(ui, "Loading...")
		return
	}

	currentURL, setURL := immgo.State(ui, url.URL{})

	go func() {
		latestURL, err := doc.GetURL()
		if err == nil && latestURL != currentURL {
			setURL(*latestURL)
		}
	}()

	switch currentURL.Path {
	case "/7gui":
		sevengui.Render(ui)
	case "/toolkit":
		toolkitdemo.Render(ui)
	case "/pr-diff":
		startSha := currentURL.Query().Get("startSha")
		endSha := currentURL.Query().Get("endSha")
		prdiff.Render(ui, startSha, endSha)
	default:
		intool.Text(ui, fmt.Sprintf("Unknown path: %s", currentURL.Path))
	}
}

func main() {
	web.Mount("0.0.0.0:8081", &app{})
}
