package toolkit

import (
	"github.com/apkumar/go-option"

	"github.com/snapper-labs/immediate/go"
)

type MarkdownOptions struct {
	Key string
}

func Markdown(ui *immgo.RenderNode, markdown string, options ...MarkdownOptions) {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription {
		Kind: "itk-markdown",
		Key: opts.Key,
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"markdown": markdown,
			},
		},
	}


	immgo.Render(ui, desc)
}
