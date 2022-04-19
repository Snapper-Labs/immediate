package main

import (
	"fmt"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

func SlButton(ui *immgo.Renderer, label string) bool {
	clicked := immgo.State(ui, false)

	props := map[string]interface{} {
		"textContent": label,
		"onclick": func(_event interface{}) {
			*clicked = true
		},
	}

	ui.Render(immgo.NewRenderNode("sl-button", "sl-button", props))

	currState := *clicked
	*clicked = false
	return currState
}


type app struct {
}

func (this *app) Render(ui *immgo.Renderer, doc *immgo_web.Document) {
	// Load shoelance
	cssLoaded := immgo_web.Link(ui, "stylesheet", "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/themes/light.css")
	scriptLoaded := immgo_web.Script(ui, "module","https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/shoelace.js")
	bothLoaded := cssLoaded && scriptLoaded

	if !bothLoaded {
		immgo_web.Text(ui, "Loading shoelace...")
	} else {
		numClicks := immgo.State(ui, 0)
		immgo_web.Text(ui, "Shoelace loaded.")
		if SlButton(ui, "shoelace button") {
			*numClicks += 1
		}
		immgo_web.Text(ui, fmt.Sprintf("%d clicks.", *numClicks))
	}
}

func main() {
	immgo_web.Serve("localhost:8080", &app{})
}
