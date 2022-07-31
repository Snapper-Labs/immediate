package intool

import (
	"strings"

	"github.com/apkumar/gox/option"

	immgo "github.com/snapper-labs/immediate/go"
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
	choice := immgo.State(parent, opts.Choices[0])

	desc := immgo.ElementDescription{
		Kind: "sl-select",
		Properties: immgo.Properties{
			EventHandlers: immgo.EventHandlers{
				"change": func(evt interface{}) {
					*choice = evt.(map[string]interface{})["targetValue"].(string)
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

	clicked := immgo.State(parent, false)

	immgo.Render(parent, immgo.ElementDescription{
		Kind: "sl-button",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"textContent": opts.Label,
				"disabled":    opts.Disabled,
			},
			EventHandlers: immgo.EventHandlers{
				"click": func(evt interface{}) {
					*clicked = true
				},
			},
		},
	})

	r := *clicked
	*clicked = false

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

type Toolkit struct{}

func (*Toolkit) GetScriptTags() []string {
	return []string{
		`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>`,
		`<script type="module" src="https://md-block.verou.me/md-block.js"></script>`,
		`<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/shoelace.js"></script>	`,
	}
}
func (*Toolkit) GetLinkTags() []string {
	return []string{
		`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">`,
		`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/themes/light.css" />`,
	}
}