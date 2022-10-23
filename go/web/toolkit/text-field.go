package toolkit

import (
	"github.com/apkumar/go-option"
	immgo "github.com/snapper-labs/immediate/go"
)

type TextFieldOptions struct {
	Key string
}

func TextField(ui *immgo.RenderNode, label string, options ...TextFieldOptions) {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription{
		Kind: "vaadin-text-field",
		Key:  opts.Key,
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"label": label,
				// I'm not exactly sure why this doesn't happen automatically. Hacking it for now.
				"style": "width: calc(99.9% - 0rem); margin-left: 0px; margin-right: 0px;",
			},
			EventHandlers: immgo.EventHandlers{},
		},
	}

	immgo.Render(ui, desc)
}
