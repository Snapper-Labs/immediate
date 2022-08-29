package sevengui

import (
	"fmt"

	immgo "github.com/snapper-labs/immediate/go"
	immgo_web "github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/intool"
)

func Counter(ui *immgo.RenderNode) {
	count, setCount := immgo.State(ui, 0)

	row := intool.Row(ui)
	intool.Text(row, fmt.Sprintf("%d", *count))
	onClick := func() {
		setCount(*count + 1)
	}

	immgo_web.Button(row, immgo_web.ButtonOptions{TextContent: "Count", OnClick: onClick})
}
