package immgo_web

import (
	immgo "github.com/apkumar/immediate/go"
)

func Div(ui *immgo.Renderer, opts ...immgo.RenderOption) {
	allOpts := append([]immgo.RenderOption{immgo.WithKind("div")}, opts...)

	immgo.Render(
		ui,
		allOpts...,
	)
}

func Container(ui *immgo.Renderer, opts ...immgo.RenderOption) {

	allOpts := append([]immgo.RenderOption{
		immgo.WithKind("div"),
		immgo.WithAttributes(immgo.Attributes{
			// TODO: Need to do styling better.
			"style": "max-width:600px;width:100%;margin-left:auto;margin-right:auto;display:block",
		}),
		immgo.WithOpen(),
	}, opts...)

	immgo.Render(ui, allOpts...)
}

func Row(ui *immgo.Renderer, opts ...immgo.RenderOption) {
	allOpts := append([]immgo.RenderOption{
		immgo.WithKind("div"),
		immgo.WithAttributes(immgo.Attributes{
			// TODO: Need to do styling better.
			"style": "display:flex;flex-direction:row;justify-content:space-between;padding:4px",
		}),
		immgo.WithOpen(),
	}, opts...)

	immgo.Render(ui, allOpts...)
}

func Col(ui *immgo.Renderer, opts ...immgo.RenderOption) {
	allOpts := append([]immgo.RenderOption{
		immgo.WithKind("div"),
		immgo.WithAttributes(immgo.Attributes{
			"style": "display:flex;flex-direction:column;width:400px",
		}),
	}, opts...)

	immgo.Render(ui, allOpts...)
}

func Text(ui *immgo.Renderer, content string, opts ...immgo.RenderOption) {
	allOpts := append(
		[]immgo.RenderOption{
			immgo.WithKind("div"),
			immgo.WithAttributes(immgo.Attributes{
				"textContent": content,
			}),
		},
		opts...,
	)

	immgo.Render(
		ui,
		allOpts...,
	)
}

func TextStyle(ui *immgo.Renderer, content string, style string) {
	allOpts := append(
		[]immgo.RenderOption{
			immgo.WithKind("div"),
			immgo.WithAttributes(immgo.Attributes{
				"textContent": content,
				"style":       style,
			}),
		},
	)

	immgo.Render(
		ui,
		allOpts...,
	)
}

func Button(ui *immgo.Renderer, label string, opts ...immgo.RenderOption) bool {
	clicked := immgo.State(ui, false)

	allOpts := append(
		[]immgo.RenderOption{
			immgo.WithKind("button"),
			immgo.WithAttributes(immgo.Attributes{
				"textContent": label,
			}),
			immgo.WithEventHandlers(immgo.EventHandlers{
				"click": func(_event interface{}) {
					*clicked = true
				},
			}),
		},
		opts...,
	)

	immgo.Render(ui, allOpts...)

	currState := *clicked
	*clicked = false
	return currState
}

func Link(ui *immgo.Renderer, rel, href string, opts ...immgo.RenderOption) bool {
	loaded := immgo.State(ui, false)
	allOpts := append(
		[]immgo.RenderOption{
			immgo.WithKind("link"),
			immgo.WithAttributes(immgo.Attributes{
				"rel":  rel,
				"href": href,
			}),
			immgo.WithEventHandlers(immgo.EventHandlers{
				"load": func(_event interface{}) {
					*loaded = true
				},
			}),
		},
		opts...,
	)

	immgo.Render(ui, allOpts...)
	return *loaded
}

func Script(ui *immgo.Renderer, typ, src string, opts ...immgo.RenderOption) bool {
	loaded := immgo.State(ui, false)
	allOpts := append(
		[]immgo.RenderOption{
			immgo.WithKind("script"),
			immgo.WithAttributes(immgo.Attributes{
				"type": typ,
				"src":  src,
			}),
			immgo.WithEventHandlers(immgo.EventHandlers{
				"load": func(_event interface{}) {
					*loaded = true
				},
			}),
		},
		opts...,
	)

	immgo.Render(ui, allOpts...)
	return *loaded
}

func TextInput(ui *immgo.Renderer, opts ...immgo.RenderOption) string {
	curr := immgo.State(ui, "")
	allOpts := append(
		[]immgo.RenderOption{
			immgo.WithKind("input"),
			immgo.WithEventHandlers(immgo.EventHandlers{
				"input": func(event interface{}) {
					*curr = event.(map[string]interface{})["targetValue"].(string)
				},
			}),
		},
		opts...,
	)

	immgo.Render(ui, allOpts...)
	return *curr
}
