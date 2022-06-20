package main

import (
	"time"
	"fmt"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"

	"github.com/apkumar/gox/option"
)

func CounterButton(root *immgo.RenderNode) string {
	clicked := immgo.State(0)

	onClick := func() {
		*clicked += 1
	}
	immgo_web.Button(root, onClick)

	oddOrEven := "odd"
	if *clicked % 2 == 0 {
		oddOrEven = "even"
	}

	return oddOrEven
}

func HelloWorld(root *immgo.RenderNode, clicked *int) {
	backgroundDiv := immgo_web.Div(root, immgo_web.DivOptions {
		Style: immgo_web.Style {
			BackgroundColor: option.Some("green"),
		},
	})

	immgo_web.Text(
		backgroundDiv,
		fmt.Sprintf("Hello, it is %s", time.Now().Format(time.UnixDate)),
	)

	onClick := func() {
		*clicked += 1
	}

	immgo_web.Button(root, onClick)

}

type app struct {
	clicked int
}

func (this app) Render(root *immgo.RenderNode, doc *immgo_web.Document) {
	HelloWorld(root)
}

func main() {
	immgo_web.Serve("localhost:8081", app{})
}
