package toolkit

import (
	"github.com/apkumar/go-option"

	immgo "github.com/snapper-labs/immediate/go"
)

type FormLayoutOptions struct {
	Key string
}

func FormLayout(ui *immgo.RenderNode, options ...FormLayoutOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription{
		Kind: "itk-form-layout",
		Key:  opts.Key,
		Properties: immgo.Properties{
			Attributes:    immgo.Attributes{},
			EventHandlers: immgo.EventHandlers{},
		},
	}

	return immgo.Render(ui, desc)
}
