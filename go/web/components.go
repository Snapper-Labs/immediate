package immgo_web

import (
	"github.com/apkumar/gox/option"

	"github.com/snapper-labs/immediate/go"
)

type DivOptions struct {
	Style Style
	Key string
}

func Div(parent *immgo.RenderNode, options ...DivOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

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

func Row(parent *immgo.RenderNode, options ...RowOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

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

func Col(parent *immgo.RenderNode, options ...ColOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

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

func Text(parent *immgo.RenderNode, options ...TextOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

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

func Select(parent *immgo.RenderNode, options ...SelectOptions) (*immgo.RenderNode, string) {
	opts := option.Merge(options...)
	choice := immgo.State(parent, opts.Choices[0])

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

func Button(parent *immgo.RenderNode, options ...ButtonOptions) bool {
	opts := option.Merge(options...)

	clicked := immgo.State(parent, false)

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

func TextInput(parent *immgo.RenderNode, options ...TextInputOptions) string {
	opts := option.Merge(options...)
	curr := immgo.State(parent, opts.Value)

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
