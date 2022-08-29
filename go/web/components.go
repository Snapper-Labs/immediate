package web

import (
	"github.com/apkumar/go-option"

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
	TextContent string
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
				"textContent": opts.TextContent,
				"style": opts.Style,
			},
		},
	}
	return immgo.Render(parent, desc)
}

type ButtonOptions struct {
	OnClick func()
	TextContent string
	Disabled bool
	Style Style
	Key string
}

func Button(parent *immgo.RenderNode, options ...ButtonOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	return immgo.Render(parent, immgo.ElementDescription {
		Kind: "button",
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"textContent": opts.TextContent,
				"disabled": opts.Disabled,
				"style": opts.Style,
			},
			EventHandlers: immgo.EventHandlers {
				"click": func(evt interface{}) {
					if opts.OnClick != nil {
						opts.OnClick()
					}
				},
			},
		},
	})
}

type InputOptions struct {
	Value string
	Disabled bool
	OnInput func(interface{})
}

func Input(parent *immgo.RenderNode, options ...InputOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	return immgo.Render(parent, immgo.ElementDescription {
		Kind: "input",
		Properties: immgo.Properties {
			Attributes: immgo.Attributes { 
				"value": opts.Value,
				"disabled": opts.Disabled,
			},
			EventHandlers: immgo.EventHandlers {
				"input": func(event interface{}) {
					if opts.OnInput != nil {
						opts.OnInput(event.(map[string]interface{})["targetValue"])
					}
				},
			},
		},
	})
}

type ScriptOptions struct {
	Integrity string
	Crossorigin string
	Type string
	OnLoad func()
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
					if opts.OnLoad != nil {
						opts.OnLoad()
					}
				},
			},
		},
	})
}

type LinkOptions struct {
	Integrity string
	Crossorigin string
	OnLoad func()
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
					if opts.OnLoad != nil {
						opts.OnLoad()
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
