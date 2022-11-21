package toolkit

import (
	"github.com/apkumar/go-option"
	immgo "github.com/snapper-labs/immediate/go"
)

type ProgressBarOptions struct {
	Key           string
	Indeterminate bool
}

func ProgressBar(ui *immgo.RenderNode, options ...ProgressBarOptions) {
	opts := option.Merge(options...)

	attributes := immgo.Attributes{}
	if opts.Indeterminate {
		attributes["indeterminate"] = "true"
	}

	desc := immgo.ElementDescription{
		Kind: "vaadin-progress-bar",
		Key:  opts.Key,
		Properties: immgo.Properties{
			Attributes: attributes,
		},
	}

	immgo.Render(ui, desc)
}
