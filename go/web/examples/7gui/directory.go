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
	container := intool.Container(ui)
	choice := Dropdown(container, tasks)

	switch choice {
	case "counter":
		Counter(container)
	case "temperature converter":
		TemperatureConverter(container)
	case "flight booker":
		FlightBooker(container)
	}
}
