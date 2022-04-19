package main

import (
	"fmt"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

type app struct {
}

func (this *app) Render(ui *immgo.Renderer, doc *immgo_web.Document) {
	immgo_web.Text(ui, "Welcome to the example.")

	numClicks := immgo.State(ui, 0)
	if immgo_web.Button(ui, "Click me!") {
		*numClicks += 1
	}

	immgo_web.Text(ui, fmt.Sprintf("You have clicked the button %d times", *numClicks))
	immgo_web.Text(ui, "Once you click the button 20 times, an alert will show!")

	alerted := immgo.State(ui, false)
	if *numClicks == 20 && !*alerted {
		go doc.Alert("Congrats!")
		*alerted = true
	}

	immgo_web.Div(ui, immgo.WithOpen())
	{
		immgo_web.Text(ui, "This is nested under the div.")
		immgo.Close(ui)
	}

	immgo_web.Text(ui, "And this is not.")
}

func main() {
	immgo_web.Serve("localhost:8080", &app{})
}
