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
	immgo_web.Text(row, fmt.Sprintf("%d", *count))
	if immgo_web.Button(row, immgo_web.ButtonOptions{Label: "Count"}) {
		setCount(*count+1)
	}
}
