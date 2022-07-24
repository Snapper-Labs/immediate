package main

import (
	"fmt"
	"strconv"

	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
)

func cToF(c float64) float64 {
	return c*9/5. + 32
}

func fToC(f float64) float64 {
	return (f - 32)*5/9.
}

func TemperatureConverter(ui *immgo.RenderNode) {
	currentC := immgo.State(ui, "", immgo.StateOptions{})
	currentF := immgo.State(ui, "", immgo.StateOptions{})

	row := immgo_web.Row(ui, immgo_web.RowOptions{})
	cInput := immgo_web.TextInput(row, immgo_web.TextInputOptions{Value: *currentC})

	// NOTE: This, versus an event/callback driven API?
	if immgo.Changed(row, cInput, immgo.ChangedOptions{}) {
		c, err := strconv.ParseFloat(cInput, 64)
		if err == nil {
			// Just change the other type, so that typing is unencumbered.
			*currentF = fmt.Sprintf("%.2f", cToF(c))
		}
	}

	immgo_web.Text(row, immgo_web.TextOptions{Content:"Celsius = "})
	fInput := immgo_web.TextInput(row, immgo_web.TextInputOptions{Value: *currentF})

	if immgo.Changed(row, fInput, immgo.ChangedOptions{}) {
		f, err := strconv.ParseFloat(fInput, 64)
		if err == nil {
			*currentC = fmt.Sprintf("%.2f", fToC(f))
		}
	}

	immgo_web.Text(row, immgo_web.TextOptions{Content:" Fahrenheit"})
}
