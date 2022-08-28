package intool

import (
	"strings"

	"github.com/apkumar/gox/option"

	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
)

type ContainerOptions struct {
	Key string
}

func Container(parent *immgo.RenderNode, options ...ContainerOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription{
		Kind: "div",
		Key:  opts.Key,
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"class": "container-md",
			},
		},
	}
	return immgo.Render(parent, desc)
}

type MarkdownOptions struct {
	Content string
	Key     string
}

func Markdown(parent *immgo.RenderNode, options ...MarkdownOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	kind := "md-span"
	if strings.HasPrefix(opts.Content, "#") {
		kind = "md-block"
	}

	desc := immgo.ElementDescription{
		Kind: kind,
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"textContent": opts.Content,
			},
		},
		Key: opts.Key,
	}

	return immgo.Render(parent, desc)
}

type SelectOptions struct {
	Key     string
	Choices []string
}

func Select(parent *immgo.RenderNode, options ...SelectOptions) (*immgo.RenderNode, string) {
	opts := option.Merge(options...)
	choice, setChoice := immgo.State(parent, opts.Choices[0])

	desc := immgo.ElementDescription{
		Kind: "sl-select",
		Properties: immgo.Properties{
			EventHandlers: immgo.EventHandlers{
				"change": func(evt interface{}) {
					setChoice(evt.(map[string]interface{})["targetValue"].(string))
				},
			},
			Attributes: immgo.Attributes{
				"value": opts.Choices[0],
			},
		},
	}

	selectNode := immgo.Render(parent, desc)

	for _, c := range opts.Choices {
		immgo.Render(selectNode, immgo.ElementDescription{
			Kind: "sl-menu-item",
			Properties: immgo.Properties{
				Attributes: immgo.Attributes{
					"textContent": c,
					"value":       c,
				},
			},
		})
	}

	return selectNode, *choice
}

type ButtonOptions struct {
	Label    string
	Disabled bool
	Key      string
}

func Button(parent *immgo.RenderNode, options ...ButtonOptions) bool {
	opts := option.Merge(options...)

	clicked, setClicked := immgo.State(parent, false)

	immgo.Render(parent, immgo.ElementDescription{
		Kind: "sl-button",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"textContent": opts.Label,
				"disabled":    opts.Disabled,
			},
			EventHandlers: immgo.EventHandlers{
				"click": func(evt interface{}) {
					setClicked(true)
				},
			},
		},
	})

	r := *clicked
	setClicked(false)

	return r
}

type LabelOptions struct {
	Label string
	Key   string
}

type GridOptions struct {
}

func Grid(parent *immgo.RenderNode, options ...GridOptions) *immgo.RenderNode {
	return immgo.Render(parent, immgo.ElementDescription{
		Kind: "div",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"class": "container",
			},
		},
	})
}

type GridRowOptions struct {
}

func GridRow(parent *immgo.RenderNode, options ...GridRowOptions) *immgo.RenderNode {
	return immgo.Render(parent, immgo.ElementDescription{
		Kind: "div",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"class": "row",
			},
		},
	})
}

type GridColumnOptions struct {
}

func GridColumn(parent *immgo.RenderNode, options ...GridColumnOptions) *immgo.RenderNode {
	return immgo.Render(parent, immgo.ElementDescription{
		Kind: "div",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"class": "col",
			},
		},
	})
}

func InitializeIntool(ui *immgo.RenderNode) bool {
	numLoaded, setNumLoaded := immgo.State(ui, 0)

	onLoad := func() {
		setNumLoaded(*numLoaded + 1)
	}

	immgo_web.Script(ui, "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js", immgo_web.ScriptOptions { Integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa", Crossorigin: "anonymous", Onload: onLoad })
	immgo_web.Script(ui, "https://md-block.verou.me/md-block.js", immgo_web.ScriptOptions { Onload: onLoad, Type: "module" })
	immgo_web.Script(ui, "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/shoelace.js", immgo_web.ScriptOptions { Onload: onLoad, Type: "module" })
	immgo_web.Link(ui, "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css", immgo_web.LinkOptions { Integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx", Crossorigin: "anonymous", Rel: "stylesheet" })
	immgo_web.Link(ui, "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/themes/light.css", immgo_web.LinkOptions { Integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx", Rel: "stylesheet" })

	return *numLoaded == 5
}
