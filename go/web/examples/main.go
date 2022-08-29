package main

import (
	"fmt"

	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/intool"
	"github.com/snapper-labs/immediate/go/web/examples/7gui"
)

type app struct {}

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
	default:
		intool.Text(ui, fmt.Sprintf("Unknown path: %s", *path))
	}
}

func main() {
	web.Mount("0.0.0.0:8081", &app{})
}
