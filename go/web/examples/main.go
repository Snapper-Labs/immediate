package main

import (
	"fmt"

	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/examples/7gui"
)

type app struct {}

func (this *app) Render(ui *immgo.RenderNode, doc *immgo_web.Document) {
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
		immgo_web.Text(ui, fmt.Sprintf("Unknown path: %s", *path))
	}
}

func main() {
	immgo_web.Handle("/", &app{})
	immgo_web.Serve("0.0.0.0:8081")
}
