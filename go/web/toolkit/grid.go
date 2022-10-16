package toolkit

import (
	"encoding/json"

	"github.com/apkumar/go-option"

	immgo "github.com/snapper-labs/immediate/go"
)

type GridOptions struct {
	Key     string
	Columns []string   `json:"Columns"`
	Rows    [][]string `json:"Rows"`
}

func Grid(ui *immgo.RenderNode, options ...GridOptions) {
	opts := option.Merge(options...)

	itemsJson, err := json.Marshal(opts)
	if err != nil {
		panic("Failure to marshal json")
	}

	desc := immgo.ElementDescription{
		Kind: "itk-grid",
		Key:  opts.Key,
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"gridOptsJson": string(itemsJson),
			},
			EventHandlers: immgo.EventHandlers{},
		},
	}

	immgo.Render(ui, desc)
}
