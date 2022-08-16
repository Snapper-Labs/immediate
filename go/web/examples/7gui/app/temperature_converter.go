package app

import (
	"fmt"
	"strconv"

	immgo "github.com/snapper-labs/immediate/go"
	immgo_web "github.com/snapper-labs/immediate/go/web"
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

	row := immgo_web.Row(ui, immgo_web.RowOptions{})
	cInput := immgo_web.TextInput(row, immgo_web.TextInputOptions{Value: *currentC})

	// NOTE: This, versus an event/callback driven API?
	if immgo.Changed(row, cInput, immgo.ChangedOptions{}) {
		fmt.Println("Detected cInput change: ", cInput)
		c, err := strconv.ParseFloat(cInput, 64)
		if err == nil {
			// Just change the other type, so that typing is unencumbered.
			setCurrentF(fmt.Sprintf("%.2f", cToF(c)))
		}
	}

	immgo_web.Text(row, immgo_web.TextOptions{Content: "Celsius = "})
	fInput := immgo_web.TextInput(row, immgo_web.TextInputOptions{Value: *currentF})

	if immgo.Changed(row, fInput, immgo.ChangedOptions{}) {
		fmt.Println("Detected fInput change: ", fInput)
		f, err := strconv.ParseFloat(fInput, 64)
		if err == nil {
			setCurrentC(fmt.Sprintf("%.2f", fToC(f)))
		}
	}

	immgo_web.Text(row, immgo_web.TextOptions{Content: " Fahrenheit"})
}
