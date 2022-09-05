package sevengui

import (
	"fmt"

	immgo "github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web/intool"
)

func Counter(ui *immgo.RenderNode) {
	count, setCount := immgo.State(ui, 0)

	grid := intool.Grid(ui)
	row := intool.GridRow(grid)

	labelCol := intool.GridColumn(row)
	intool.Text(labelCol, fmt.Sprintf("%d", *count))

	buttonCol := intool.GridColumn(row)
	clicked := intool.Button(buttonCol, intool.ButtonOptions{Label: "Increment"})
	if clicked {
		setCount(*count + 1)
	}
}
