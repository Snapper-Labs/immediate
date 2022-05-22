package main

import (
	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

var (
	tasks = []string{"none", "counter", "temperature converter", "flight booker"}
)

func Dropdown(ui *immgo.RenderNode, choices []string) string {
	immgo_web.Text(ui, immgo_web.TextOptions{ Content: "Choose a 7gui task:"})

	_, choice := immgo_web.Select(ui, immgo_web.SelectOptions {
		Choices: choices,
	})


	return choice
}

type app struct {}

func (this *app) Render(ui *immgo.RenderNode, doc *immgo_web.Document) {
	choice := Dropdown(ui, tasks)

	switch choice {
	case "counter":
		Counter(ui)
	case "temperature converter":
		TemperatureConverter(ui)
	case "flight booker":
		FlightBooker(ui)
	}
}

func main() {
	immgo_web.Serve("localhost:8081", &app{})
}
