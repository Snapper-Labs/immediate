package toolkitdemo

import (
	"fmt"

	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web/toolkit"
)

func Render(ui *immgo.RenderNode) {
	initialized, setInitialized := immgo.State(ui, false)
	toolkit.Initialize(ui, func() { setInitialized(true) })

	if *initialized {
		toolkit.Markdown(ui, "_Loaded!_")

		clicked, setClicked := immgo.State(ui, 0)
		toolkit.Button(ui, fmt.Sprintf("Click me! (%d)", *clicked), toolkit.ButtonOptions { OnClick: func() { setClicked(*clicked + 1) } })
	} else {
		toolkit.Markdown(ui, "_Loading..._")
	}
}
