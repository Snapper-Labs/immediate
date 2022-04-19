package immgo_web


import (
	"github.com/apkumar/immediate/go"
)

func Div(ui *immgo.Renderer, opts ...immgo.RenderOption) {
	allOpts := append([]immgo.RenderOption{ immgo.WithKind("div") }, opts...)

	immgo.Render(
		ui,
		allOpts...,
	)
}

func Text(ui *immgo.Renderer, content string) {
	props := map[string]interface{} {
		"textContent": content,
	}

	divNode := immgo.NewRenderNode("div", "div", props)
	ui.Render(divNode)
}

func Button(ui *immgo.Renderer, label string) bool {
	clicked := immgo.State(ui, false)

	props := map[string]interface{} {
		"textContent": label,
		"onclick": func(_event interface{}) {
			*clicked = true
		},
	}

	ui.Render(immgo.NewRenderNode("button", "button", props))

	currState := *clicked
	*clicked = false
	return currState
}

func Link(ui *immgo.Renderer, rel, href string) bool {
	loaded := immgo.State(ui, false)
	props := map[string]interface{} {
		"rel": rel,
		"href": href,
		"onload": func(_event interface{}) {
			*loaded = true
		},
	}

	ui.Render(immgo.NewRenderNode("link", "link", props))
	return *loaded
}

func Script(ui *immgo.Renderer, typ, src string) bool {
	loaded := immgo.State(ui, false)
	props := map[string]interface{} {
		"type": typ,
		"src": src,
		"onload": func(_event interface{}) {
			*loaded = true
		},
	}

	ui.Render(immgo.NewRenderNode("script", "script", props))
	return *loaded
}

func TextInput(ui *immgo.Renderer) string {
	curr := immgo.State(ui, "")
	props := map[string]interface{} {
		"oninput": func(event interface{}) {
			*curr = event.(map[string]interface{})["targetValue"].(string)
		},
	}

	ui.Render(immgo.NewRenderNode("textinput", "input", props))
	return *curr
}
