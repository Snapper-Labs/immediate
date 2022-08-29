package sevengui

import (
	"fmt"

	immgo "github.com/snapper-labs/immediate/go"
	web "github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/intool"
)

func Counter(ui *immgo.RenderNode) {
	count, setCount := immgo.State(ui, 0)

	row := intool.Row(ui)
	intool.Text(row, fmt.Sprintf("%d", *count))
	onClick := func() {
		setCount(*count + 1)
	}

	web.Button(row, web.ButtonOptions{TextContent: "Count", OnClick: onClick})
}
