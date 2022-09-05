package toolkit

import (
	"github.com/apkumar/go-option"

	"github.com/snapper-labs/immediate/go"
)

type ButtonOptions struct {
	Key string
	OnClick func()
}

func Button(ui *immgo.RenderNode, label string, options ...ButtonOptions) {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription {
		Kind: "itk-button",
		Key: opts.Key,
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"label": label,
			},
			EventHandlers: immgo.EventHandlers {
				"click": func(event interface{}) {
					if opts.OnClick != nil {
						opts.OnClick()
					}
				},
			},
		},
	}


	immgo.Render(ui, desc)
}
