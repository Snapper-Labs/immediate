package main

import (
	"github.com/apkumar/gox/option"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

func TwoPane(parent *immgo.RenderNode) (*immgo.RenderNode, *immgo.RenderNode) {
	left := immgo_web.Div(parent, immgo_web.DivOptions {
		Style: immgo_web.Style {
			Height: option.Some("100%"),
			Width: option.Some("50%"),
			Position: option.Some("fixed"),
			Top: option.Some(0),
			BackgroundColor: option.Some("red"),
			Left: option.Some(0),
		},
	})

	right := immgo_web.Div(parent, immgo_web.DivOptions {
		Style: immgo_web.Style {
			Height: option.Some("100%"),
			Width: option.Some("50%"),
			Position: option.Some("fixed"),
			Top: option.Some(0),
			BackgroundColor: option.Some("green"),
			Right: option.Some(0),
		},
	})


	return left, right
}

type app struct {}

func (this *app) Render(ui *immgo.RenderNode, doc *immgo_web.Document) {
	left, right := TwoPane(ui)

	// render stuff to left
	immgo_web.Text(left, immgo_web.TextOptions{Content: "Hello World"})
	immgo_web.Text(left, immgo_web.TextOptions{Content: "This is on the left"})

	// render stuff to right
	immgo_web.Text(right, immgo_web.TextOptions{Content: "This is on the right"})
}

func main() {
	immgo_web.Serve("localhost:8080", &app{})
}
