package main

import (
	"fmt"

	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/examples/7gui"
	"github.com/snapper-labs/immediate/go/web/examples/bug_reporter"
)

type app struct {}

func (this *app) Render(ui *immgo.RenderNode, doc *web.Document) {
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
	case "/bug_reporter":
		bugreporter.Render(ui)
	default:
		web.Text(ui, fmt.Sprintf("Unknown path: %s", *path))
	}
}

func main() {
	web.Handle("/", &app{})
	web.Serve("0.0.0.0:8081")
}
