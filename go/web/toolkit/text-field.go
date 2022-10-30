package toolkit

import (
	"github.com/apkumar/go-option"
	immgo "github.com/snapper-labs/immediate/go"
)

type TextFieldOptions struct {
	Key string
}

func TextField(ui *immgo.RenderNode, label string, options ...TextFieldOptions) string {
	opts := option.Merge(options...)

	value, setValue := immgo.State(ui, "")

	desc := immgo.ElementDescription{
		Kind: "vaadin-text-field",
		Key:  opts.Key,
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"label": label,
				"value": *value,
			},
			EventHandlers: immgo.EventHandlers{
				"change": func(evt interface{}) {
					setValue(evt.(map[string]interface{})["targetValue"].(string))
				},
			},
		},
	}

	immgo.Render(ui, desc)

	return *value
}
