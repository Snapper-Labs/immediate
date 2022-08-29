package immgo_web

import (
	"github.com/apkumar/gox/option"

	"github.com/snapper-labs/immediate/go"
)

// The functions in this file are intended to be essentially pass-through
// wrappers to DOM elements. The pattern for their API is as follows:
//
// - All functions take the parent *immgo.RenderNode as their first argument.
// - Attributes that are required for the DOM element should be passed in as
// positional arguments.
// - Attributes that are optional for the DOM element should be collected into
// an `Options` struct and passed in using ...Options.
// - Event handlers should be preferred over an immediate-mode API (a component
// library built on top of these components could adopt an immediate-mode API).
// - Every component should take an optional Key in the Options struct.


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

type TextOptions struct {
	Style Style
	Key string
}

func Text(parent *immgo.RenderNode, content string, options ...TextOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription {
		Kind: "div",
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"textContent": content,
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
	choice, setChoice := immgo.State(parent, opts.Choices[0])

	desc := immgo.ElementDescription {
		Kind: "select",
		Properties: immgo.Properties {
			EventHandlers: immgo.EventHandlers {
				"change": func(evt interface{}) {
					ch := evt.(map[string]interface{})["targetValue"].(string)
					setChoice(ch)
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

	clicked, setClicked := immgo.State(parent, false)

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
					setClicked(true)
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
	curr, setCurr := immgo.State(parent, opts.Value)

	immgo.Render(parent, immgo.ElementDescription {
		Kind: "input",
		Properties: immgo.Properties {
			Attributes: immgo.Attributes { 
				"value": opts.Value,
				"disabled": opts.Disabled,
			},
			EventHandlers: immgo.EventHandlers {
				"input": func(event interface{}) {
					setCurr(event.(map[string]interface{})["targetValue"].(string))
				},
			},
		},
	})

	return *curr
}

type ScriptOptions struct {
	Integrity string
	Crossorigin string
	Type string
	Onload func()
}

func Script(ui *immgo.RenderNode, src string, options ...ScriptOptions) {
	opts := option.Merge(options...)

	immgo.Render(ui, immgo.ElementDescription {
		Kind: "script",
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"src": src,
				"integrity": opts.Integrity,
				"crossorigin": opts.Crossorigin,
				"type": opts.Type,
			},
			EventHandlers: immgo.EventHandlers {
				"load": func(event interface{}) {
					if opts.Onload != nil {
						opts.Onload()
					}
				},
			},
		},
	})
}

type LinkOptions struct {
	Integrity string
	Crossorigin string
	Onload func()
	Rel string
}


func Link(ui *immgo.RenderNode, href string, options ...LinkOptions) {
	opts := option.Merge(options...)

	immgo.Render(ui, immgo.ElementDescription {
		Kind: "link",
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"href": href,
				"integrity": opts.Integrity,
				"crossorigin": opts.Crossorigin,
				"rel": opts.Rel,
			},
			EventHandlers: immgo.EventHandlers {
				"load": func(event interface{}) {
					if opts.Onload != nil {
						opts.Onload()
					}
				},
			},
		},
	})
}


type DefaultToolkit struct {
}

func (*DefaultToolkit) GetScriptTags() []string {
	return []string{}
}
func (*DefaultToolkit) GetLinkTags() []string {
	return []string{}
}
