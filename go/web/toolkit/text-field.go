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
			},
			EventHandlers: immgo.EventHandlers{},
		},
	}

	immgo.Render(ui, desc)
}
