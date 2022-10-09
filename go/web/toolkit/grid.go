package toolkit

import (
	"encoding/json"

	"github.com/apkumar/go-option"

	immgo "github.com/snapper-labs/immediate/go"
)

type GridOptions struct {
	Key string
}

type Deployment struct {
	SHA         string `json:"SHA"`
	PR          string `json:"PR"`
	Description string `json:"Description"`
}

func Grid(ui *immgo.RenderNode, options ...GridOptions) {
	opts := option.Merge(options...)

	items := []Deployment{
		{SHA: "abc", PR: "123", Description: "def"},
	}

	itemsJson, err := json.Marshal(items)
	if err != nil {
		panic("Failure to marshal json")
	}

	desc := immgo.ElementDescription{
		Kind: "itk-grid",
		Key:  opts.Key,
		Properties: immgo.Properties{
			Attributes: immgo.Attributes{
				"itemsJson": string(itemsJson),
			},
			EventHandlers: immgo.EventHandlers{},
		},
	}

	immgo.Render(ui, desc)
	// immgo.Render(wrapper, immgo.ElementDescription{
	// 	Kind: "vaadin-grid-column",
	// 	Properties: immgo.Properties{
	// 		Attributes: immgo.Attributes{
	// 			"path": "SHA",
	// 		},
	// 	},
	// })
	// immgo.Render(wrapper, immgo.ElementDescription{
	// 	Kind: "vaadin-grid-column",
	// 	Properties: immgo.Properties{
	// 		Attributes: immgo.Attributes{
	// 			"path": "PR",
	// 		},
	// 	},
	// })
	// immgo.Render(wrapper, immgo.ElementDescription{
	// 	Kind: "vaadin-grid-column",
	// 	Properties: immgo.Properties{
	// 		Attributes: immgo.Attributes{
	// 			"path": "Description",
	// 		},
	// 	},
	// })

	/*
		immgo.Render(wrapper, immgo.ElementDescription{
			Kind: "vaadin-grid-cell-content",
			Properties: immgo.Properties{
				Attributes: immgo.Attributes{
					"textContent": "SHA",
					"slot":        "vaadin-grid-cell-content-0",
				},
			},
		})
		immgo.Render(wrapper, immgo.ElementDescription{
			Kind: "vaadin-grid-cell-content",
			Properties: immgo.Properties{
				Attributes: immgo.Attributes{
					"textContent": "PR",
					"slot":        "vaadin-grid-cell-content-1",
				},
			},
		})
		immgo.Render(wrapper, immgo.ElementDescription{
			Kind: "vaadin-grid-cell-content",
			Properties: immgo.Properties{
				Attributes: immgo.Attributes{
					"textContent": "Description",
					"slot":        "vaadin-grid-cell-content-2",
				},
			},
		})

		immgo.Render(wrapper, immgo.ElementDescription{
			Kind: "vaadin-grid-cell-content",
			Properties: immgo.Properties{
				Attributes: immgo.Attributes{
					"textContent": items[0].SHA,
					"slot":        "vaadin-grid-cell-content-3",
				},
			},
		})
		immgo.Render(wrapper, immgo.ElementDescription{
			Kind: "vaadin-grid-cell-content",
			Properties: immgo.Properties{
				Attributes: immgo.Attributes{
					"textContent": items[0].PR,
					"slot":        "vaadin-grid-cell-content-4",
				},
			},
		})
		immgo.Render(wrapper, immgo.ElementDescription{
			Kind: "vaadin-grid-cell-content",
			Properties: immgo.Properties{
				Attributes: immgo.Attributes{
					"textContent": items[0].Description,
					"slot":        "vaadin-grid-cell-content-5",
				},
			},
		})
	*/
}
