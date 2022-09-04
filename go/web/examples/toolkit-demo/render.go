package toolkitdemo

import (
	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web/toolkit"
)

func Render(ui *immgo.RenderNode) {
	initialized, setInitialized := immgo.State(ui, false)
	toolkit.Initialize(ui, func() { setInitialized(true) })

	if *initialized {
		toolkit.Markdown(ui, "_Loaded!_")
	} else {
		toolkit.Markdown(ui, "_Loading..._")
	}
}
