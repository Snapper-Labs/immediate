package main

import (
	"context"
	"time"
	"fmt"
	_ "embed"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

//go:embed js/out.js
var jsScript string

func LoadCustomElement(root *immgo.RenderNode) bool {
	return immgo_web.Script(root, jsScript)
}

type app struct {}

func (this *app) Render(ui *immgo.RenderNode, doc *immgo_web.Document) {
	loaded := LoadCustomElement(ui)

	immgo_web.Text(ui, fmt.Sprintf("Loaded ? %v", loaded))

	// Use it
	if loaded {
		// Properties can be updated as normal.
		updateCount := immgo.State(ui, 0)
		immgo.Do(ui, func(ctx context.Context) {
			for {
				*updateCount += 1

				time.Sleep(time.Second)
				if ctx.Err() != nil {
					return
				}
			}
		})

		desc := immgo.ElementDescription {
			Kind: "my-element",
			Properties: immgo.Properties {
				Attributes: immgo.Attributes {
					"version": fmt.Sprintf("%d", *updateCount),
				},
			},
		}

		immgo.Render(ui, desc)
	}

}

func main() {
	immgo_web.Serve("localhost:8081", &app{})
}
