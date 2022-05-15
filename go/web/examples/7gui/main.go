package main

import (
	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

var (
	tasks = []string{"none", "counter", "temperature converter", "flight booker"}
)

func Dropdown(ui *immgo.Renderer, choices []string) string {
	choice := immgo.State(ui, choices[0])

	immgo_web.Text(ui, "Choose a 7gui task:")
	immgo.Render(
		ui,
		immgo.WithKind("select"),
		immgo.WithEventHandler("change", func(evt interface{}) {
			*choice = evt.(map[string]interface{})["targetValue"].(string)
		}),
		immgo.WithOpen(),
	)

	for _, c := range choices {
		immgo.Render(
			ui,
			immgo.WithKind("option"),
			immgo.WithAttribute("textContent", c),
		)
	}

	immgo.Close(ui)
	return *choice
}

type app struct {}

func (this *app) Render(ui *immgo.Renderer, doc *immgo_web.Document) {
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
	immgo_web.Serve("localhost:8080", &app{})
}
