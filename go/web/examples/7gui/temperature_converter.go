package main

import (
	"fmt"
	"strconv"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

func cToF(c float64) float64 {
	return c*9/5. + 32
}

func fToC(f float64) float64 {
	return (f - 32)*5/9.
}

func TemperatureConverter(ui *immgo.Renderer) {
	currentC := immgo.State(ui, "")
	currentF := immgo.State(ui, "")

	immgo_web.Row(ui)
	cInput := immgo_web.TextInput(ui, immgo.WithAttribute("value", *currentC))
	// NOTE: This, versus an event/callback driven API?
	if immgo.Changed(ui, cInput) {
		c, err := strconv.ParseFloat(cInput, 64)
		if err == nil {
			// Just change the other type, so that typing is unencumbered.
			*currentF = fmt.Sprintf("%.2f", cToF(c))
		}
	}

	immgo_web.Text(ui, "Celsius = ")
	fInput := immgo_web.TextInput(ui, immgo.WithAttribute("value", *currentF))
	if immgo.Changed(ui, fInput) {
		f, err := strconv.ParseFloat(fInput, 64)
		if err == nil {
			*currentC = fmt.Sprintf("%.2f", fToC(f))
		}
	}

	immgo_web.Text(ui, " Fahrenheit")
	immgo.Close(ui)
}
