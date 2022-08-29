package sevengui

import (
	immgo "github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web/intool"
)

var (
	tasks = []string{"none", "counter", "temperature converter", "flight booker"}
)

func Dropdown(ui *immgo.RenderNode, choices []string) string {
	intool.Text(ui, "Choose a 7gui task:")

	_, choice := intool.Select(ui, intool.SelectOptions{
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
