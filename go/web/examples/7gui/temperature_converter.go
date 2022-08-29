package sevengui

import (
	"fmt"
	"strconv"

	immgo "github.com/snapper-labs/immediate/go"
	immgo_web "github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/intool"
)

func cToF(c float64) float64 {
	return c*9/5. + 32
}

func fToC(f float64) float64 {
	return (f - 32) * 5 / 9.
}

func TemperatureConverter(ui *immgo.RenderNode) {
	currentC, setCurrentC := immgo.State(ui, "", immgo.StateOptions{})
	currentF, setCurrentF := immgo.State(ui, "", immgo.StateOptions{})

	// NOTE: This, versus an event/callback driven API?
	onCChanged := func(v interface{}) {
		cInput := v.(string)
		c, err := strconv.ParseFloat(cInput, 64)
		if err == nil {
			// Just change the other type, so that typing is unencumbered.
			setCurrentF(fmt.Sprintf("%.2f", cToF(c)))
		}
	}

	onFChanged := func(v interface{}) {
		fInput := v.(string)
		fmt.Println("Detected fInput change: ", fInput)
		f, err := strconv.ParseFloat(fInput, 64)
		if err == nil {
			setCurrentC(fmt.Sprintf("%.2f", fToC(f)))
		}
	}


	row := intool.Row(ui, intool.RowOptions{})
	immgo_web.Input(row, immgo_web.InputOptions{OnInput: onCChanged, Value: *currentC})
	intool.Text(row, "Celsius = ")
	immgo_web.Input(row, immgo_web.InputOptions{OnInput: onFChanged, Value: *currentF})
	intool.Text(row, " Fahrenheit")
}
