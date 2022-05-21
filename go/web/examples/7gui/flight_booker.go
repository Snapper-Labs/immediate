package main

import (
	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

var (
	ONE_WAY_FLIGHT = "one-way flight"
	RETURN_FLIGHT = "return flight"
)

func isValidDate(date string) bool {
	return true
}

func FlightBooker(ui *immgo.RenderNode) {
	col := immgo_web.Col(ui)

	choice := Dropdown(col, []string{ONE_WAY_FLIGHT, RETURN_FLIGHT})
	startDate := immgo.State(col, "2014-11-12")
	endDate := immgo.State(col, "2014-11-12")

	endDateEnabled := choice == RETURN_FLIGHT
	bookEnabled := *endDate >= *startDate

	*startDate = immgo_web.TextInput(col, immgo_web.TextInputOptions{Value: *startDate})
	*endDate = immgo_web.TextInput(col, immgo_web.TextInputOptions{Value: *endDate, Disabled: !endDateEnabled})

	if immgo_web.Button(ui, immgo_web.ButtonOptions{Label:"Book", Disabled: !bookEnabled}) {
		// button clicked.
	}
}
