package sevengui

import (
	immgo "github.com/snapper-labs/immediate/go"
	web "github.com/snapper-labs/immediate/go/web"
)

var (
	tasks = []string{"none", "counter", "temperature converter", "flight booker"}
)

func Dropdown(ui *immgo.RenderNode, choices []string) string {
	web.Text(ui, "Choose a 7gui task:")

	_, choice := web.Select(ui, web.SelectOptions{
		Choices: choices,
	})

	return choice
}

func Render(ui *immgo.RenderNode) {
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
