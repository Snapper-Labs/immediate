package main

import (
	"github.com/snapper-labs/immediate/go"
)

type ShowcaseApp struct {
	Name string
	Description string
	SourceCodeUrl string
	Render func(ui *immgo.RenderNode)
}

var ShowcaseApps = []ShowcaseApp {
	{
		Name: "Hello World",
		Description: "A simple example of how to render a component.",
		SourceCodeUrl: "",
	},
	{
		Name: "Hello World",
		Description: "A simple example of how to render a component.",
		SourceCodeUrl: "",
	},
}
