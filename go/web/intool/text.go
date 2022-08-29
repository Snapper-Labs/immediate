package intool

import (
	"github.com/apkumar/go-option"

	"github.com/snapper-labs/immediate/go"
	web "github.com/snapper-labs/immediate/go/web"
)

type TextOptions struct {
	Style web.Style
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
