package main

import (
	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

func Spinner(ui *immgo.Renderer, opts ...immgo.RenderOption) {
	immgo.Render(
		ui, 
		append([]immgo.RenderOption {
			immgo.WithKind("sl-spinner"),
		}, opts...)...,
	)
}

func WithSlot(slot string) immgo.RenderOption {
	return immgo.WithAttribute("slot", slot)
}

// Simple dropdown, doesn't expose the entire shoelace api
func Dropdown(ui *immgo.Renderer, choices []string, opts ...immgo.RenderOption) string {
	choice := immgo.State(ui, "")

	immgo.Render(
		ui,
		append([]immgo.RenderOption{
			immgo.WithKind("sl-dropdown"),
			immgo.WithOpen(),
			immgo.WithEventHandler("sl-select", func(evt interface{}) {
				*choice = evt.(map[string]interface{})["detail"].(map[string]interface{})["itemValue"].(string)
			}),
		}, opts...)...
	)

	Button(ui, WithSlot("trigger"), immgo.WithAttribute("textContent", "Dropdown"))
	immgo.Render(ui, immgo.WithKind("sl-menu"), immgo.WithOpen())
	for _, choice := range choices {
		immgo.Render(
			ui, 
			immgo.WithKind("sl-menu-item"), 
			immgo.WithKey(choice), 
			immgo.WithAttribute("textContent", choice),
			immgo.WithAttribute("value", choice),
		)
	}
	immgo.Close(ui)

	immgo.Close(ui)

	return *choice
}

func Button(ui *immgo.Renderer, opts ...immgo.RenderOption) bool {
	state := immgo.State(ui, false)

	allOpts := append(
		[]immgo.RenderOption{
			immgo.WithKind("sl-button"),
			immgo.WithEventHandlers(immgo.EventHandlers {
				"click": func(_event interface{}) {
					*state = true
				},
			}),
		},
		opts...
	)

	immgo.Render(
		ui,
		allOpts...
	)

	r := *state
	*state = false
	return r
}

func ShoelaceAssets(ui *immgo.Renderer) bool {
	cssLoaded := immgo_web.Link(ui, "stylesheet", "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/themes/light.css")
	scriptLoaded := immgo_web.Script(ui, "module","https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/shoelace.js")

	return cssLoaded && scriptLoaded
}
