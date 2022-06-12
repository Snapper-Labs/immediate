package immgo_web

import (
	"github.com/apkumar/gox/option"

	immgo "github.com/apkumar/immediate/go"
)

type FormOptions struct {
	Style Style
	Key   string
}

func Form(parent *immgo.RenderNode, options ...TextOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription{
		Kind: "form",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"style": opts.Style,
			},
		},
		Key: opts.Key,
	}

	return immgo.Render(parent, desc)
}

type DivOptions struct {
	Style Style
	Key   string
}

func Div(parent *immgo.RenderNode, options ...DivOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription{
		Kind: "div",
		Key:  opts.Key,
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"style": opts.Style,
			},
		},
	}
	return immgo.Render(parent, desc)
}

type ContainerOptions struct {
	Style Style
	Key   string
}

func Container(parent *immgo.RenderNode, options ...ContainerOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	wrStyle := Style{}
	wrStyle.Width = option.Some("100%")

	wrOpts := DivOptions{wrStyle, opts.Key}
	wrapper := Div(parent, wrOpts)

	style := opts.Style
	style.MaxWidth = option.Some("600px")
	style.MinWidth = option.Some("600px")
	style.Width = option.Some("100%")

	divOpts := DivOptions{style, opts.Key}
	return Div(wrapper, divOpts)
}

type RowOptions struct {
	Style Style
	Key   string
}

func Row(parent *immgo.RenderNode, options ...RowOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	style := opts.Style
	style.Display = option.Some("flex")
	style.FlexDirection = option.Some("row")
	style.JustifyContent = option.Some("space-between")

	divOpts := DivOptions{style, opts.Key}
	return Div(parent, divOpts)
}

type ColOptions struct {
	Style Style
	Key   string
}

func Col(parent *immgo.RenderNode, options ...ColOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	style := opts.Style
	style.Display = option.Some("flex")
	style.FlexDirection = option.Some("column")

	divOpts := DivOptions{style, opts.Key}
	return Div(parent, divOpts)
}

type TextOptions struct {
	Content string
	Style   Style
	Key     string
}

func Text(parent *immgo.RenderNode, options ...TextOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription{
		Kind: "div",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"textContent": opts.Content,
			},
		},
		Key: opts.Key,
	}

	return immgo.Render(parent, desc)
}

type H1Options struct {
	Content string
	Style   Style
	Key     string
}

func H1(parent *immgo.RenderNode, options ...H1Options) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription{
		Kind: "h1",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"textContent": opts.Content,
			},
		},
		Key: opts.Key,
	}

	return immgo.Render(parent, desc)
}

type H2Options struct {
	Content string
	Style   Style
	Key     string
}

func H2(parent *immgo.RenderNode, options ...H2Options) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription{
		Kind: "h2",
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
	Style   Style
	Key     string
	Choices []string
}

func Select(parent *immgo.RenderNode, options ...SelectOptions) (*immgo.RenderNode, string) {
	opts := option.Merge(options...)
	choice := immgo.State(parent, opts.Choices[0])

	desc := immgo.ElementDescription{
		Kind: "select",
		Properties: immgo.Properties{
			EventHandlers: immgo.EventHandlers{
				"change": func(evt interface{}) {
					*choice = evt.(map[string]interface{})["targetValue"].(string)
				},
			},
		},
	}

	selectNode := immgo.Render(parent, desc)

	for _, c := range opts.Choices {
		immgo.Render(selectNode, immgo.ElementDescription{
			Kind: "option",
			Properties: immgo.Properties{
				Attributes: immgo.Attributes{
					"textContent": c,
					"style":       opts.Style,
				},
			},
		})
	}

	return selectNode, *choice
}

type ButtonOptions struct {
	Label    string
	Disabled bool
	Style    Style
	Key      string
}

func Button(parent *immgo.RenderNode, options ...ButtonOptions) bool {
	opts := option.Merge(options...)

	clicked := immgo.State(parent, false)

	immgo.Render(parent, immgo.ElementDescription{
		Kind: "button",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"textContent": opts.Label,
				"disabled":    opts.Disabled,
				"style":       opts.Style,
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

func Label(parent *immgo.RenderNode, options ...LabelOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription{
		Kind: "label",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"textContent": opts.Label,
			},
		},
		Key: opts.Key,
	}

	return immgo.Render(parent, desc)
}

type TextInputOptions struct {
	Label    string
	Value    string
	Disabled bool
	// todo
}

func TextInput(parent *immgo.RenderNode, options ...TextInputOptions) string {
	opts := option.Merge(options...)
	curr := immgo.State(parent, opts.Value)

	if opts.Label != "" {
		Label(parent, LabelOptions{Label: opts.Label})
	}

	immgo.Render(parent, immgo.ElementDescription{
		Kind: "input",
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"value":    opts.Value,
				"disabled": opts.Disabled,
			},
			EventHandlers: immgo.EventHandlers{
				"input": func(event interface{}) {
					*curr = event.(map[string]interface{})["targetValue"].(string)
				},
			},
		},
	})

	return *curr
}
