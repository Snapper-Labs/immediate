package toolkit

import (
	"github.com/apkumar/go-option"

	"github.com/snapper-labs/immediate/go"
)


type TextOptions struct {
	Key string
}

func Text(parent *immgo.RenderNode, text string, options ...TextOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription {
		Kind: "div",
		Key: opts.Key,
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"textContent": text,
			},
		},
	}

	return immgo.Render(parent, desc)
}

