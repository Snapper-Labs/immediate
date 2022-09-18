package main

import (
	"fmt"

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

	path, setPath := immgo.State(ui, "")

	go func() {
		url, err := doc.GetURL()
		if err == nil && *path != url.Path {
			setPath(url.Path)
		}
	}()

	switch *path {
	case "/7gui":
		sevengui.Render(ui)
	case "/toolkit":
		toolkitdemo.Render(ui)
	case "/pr-diff":
		prdiff.Render(ui)
	default:
		intool.Text(ui, fmt.Sprintf("Unknown path: %s", *path))
	}
}

func main() {
	web.Mount("0.0.0.0:8081", &app{})
}
