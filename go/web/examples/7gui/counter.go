package sevengui

import (
	"fmt"

	immgo "github.com/snapper-labs/immediate/go"
	web "github.com/snapper-labs/immediate/go/web"
)

func Counter(ui *immgo.RenderNode) {
	count, setCount := immgo.State(ui, 0)

	row := web.Row(ui)
	web.Text(row, fmt.Sprintf("%d", *count))
	if web.Button(row, web.ButtonOptions{Label: "Count"}) {
		setCount(*count+1)
	}
}
