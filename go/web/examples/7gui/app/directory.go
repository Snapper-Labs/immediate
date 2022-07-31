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

func (this *App) GetScriptTags() []string {
	return []string{
		`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>`,
		`<script type="module" src="https://md-block.verou.me/md-block.js"></script>`,
		`<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/shoelace.js"></script>	`,
	}
}
func (this *App) GetLinkTags() []string {
	return []string{
		`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">`,
		`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/themes/light.css" />`,
	}
}

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
