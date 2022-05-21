package immgo_web

import (
	"github.com/apkumar/gox/option"

	"github.com/apkumar/immediate/go"
)

type DivOptions struct {
	Style Style
	Key string
}

func Div(parent *immgo.RenderNode, opts DivOptions) *immgo.RenderNode {
	desc := immgo.ElementDescription {
		Kind: "div",
		Key: opts.Key,
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"style": opts.Style,
			},
		},
	}
	return immgo.Render(parent, desc)
}

type RowOptions struct {
	Style Style
	Key string
}

func Row(parent *immgo.RenderNode, opts RowOptions) *immgo.RenderNode {
	style := opts.Style
	style.Display = option.Some("flex")
	style.FlexDirection = option.Some("row")

	divOpts := DivOptions { style, opts.Key }
	return Div(parent, divOpts)
}

type ColOptions struct {
	Style Style
	Key string
}

func Col(parent *immgo.RenderNode, opts ColOptions) *immgo.RenderNode {
	style := opts.Style
	style.Display = option.Some("flex")
	style.FlexDirection = option.Some("column")

	divOpts := DivOptions { style, opts.Key }
	return Div(parent, divOpts)
}

type TextOptions struct {
	Content string
	Style Style
	Key string
}

func Text(parent *immgo.RenderNode, opts TextOptions) *immgo.RenderNode {
	desc := immgo.ElementDescription {
		Kind: "div",
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"textContent": opts.Content,
			},
		},
		Key: opts.Key,
	}

	return immgo.Render(parent, desc)
}

type SelectOptions struct {
	Style Style
	Key string
	Choices []string
}

func Select(parent *immgo.RenderNode, opts SelectOptions) (*immgo.RenderNode, string) {
	choice := immgo.State(parent, opts.Choices[0], immgo.StateOptions{})

	desc := immgo.ElementDescription {
		Kind: "select",
		Properties: immgo.Properties {
			EventHandlers: immgo.EventHandlers {
				"change": func(evt interface{}) {
					*choice = evt.(map[string]interface{})["targetValue"].(string)
				},
			},
		},
	}

	selectNode := immgo.Render(parent, desc)

	for _, c := range opts.Choices {
		immgo.Render(selectNode, immgo.ElementDescription {
			Kind: "option",
			Properties: immgo.Properties {
				Attributes: immgo.Attributes {
					"textContent": c,
					"style": opts.Style,
				},
			},
		})
	}

	return selectNode, *choice
}

type ButtonOptions struct {
	Label string
	Disabled bool
	Style Style
	Key string
}

func Button(parent *immgo.RenderNode, opts ButtonOptions) bool {
	clicked := immgo.State(parent, false, immgo.StateOptions{})

	immgo.Render(parent, immgo.ElementDescription {
		Kind: "button",
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"textContent": opts.Label,
				"disabled": opts.Disabled,
				"style": opts.Style,
			},
			EventHandlers: immgo.EventHandlers {
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

type TextInputOptions struct {
	Value string
	Disabled bool
	// todo
}

func TextInput(parent *immgo.RenderNode, opts TextInputOptions) string {
	curr := immgo.State(parent, opts.Value, immgo.StateOptions{})

	immgo.Render(parent, immgo.ElementDescription {
		Kind: "input",
		Properties: immgo.Properties {
			Attributes: immgo.Attributes { 
				"value": opts.Value,
				"disabled": opts.Disabled,
			},
			EventHandlers: immgo.EventHandlers {
				"input": func(event interface{}) {
					*curr = event.(map[string]interface{})["targetValue"].(string)
				},
			},
		},
	})

	return *curr
}
