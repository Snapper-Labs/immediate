package app

import (
	immgo "github.com/snapper-labs/immediate/go"
	immgo_web "github.com/snapper-labs/immediate/go/web"
)

var (
	tasks = []string{"none", "counter", "temperature converter", "flight booker"}
)

func Dropdown(ui *immgo.RenderNode, choices []string) string {
	immgo_web.Text(ui, immgo_web.TextOptions{Content: "Choose a 7gui task:"})

	_, choice := immgo_web.Select(ui, immgo_web.SelectOptions{
		Choices: choices,
	})

	return choice
}

type App struct{}

func (this *App) Render(ui *immgo.RenderNode, doc *immgo_web.Document) {
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
