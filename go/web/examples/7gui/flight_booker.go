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

func FlightBooker(ui *immgo.Renderer) {
	immgo_web.Col(ui, immgo.WithChildren(func() {
		choice := Dropdown(ui, []string{ONE_WAY_FLIGHT, RETURN_FLIGHT})
		startDate := immgo.State(ui, "2014-11-12")
		endDate := immgo.State(ui, "2014-11-12")

		endDateEnabled := choice == RETURN_FLIGHT
		bookEnabled := *endDate >= *startDate

		if s := immgo_web.TextInput(ui, immgo.WithAttribute("value", *startDate)); s != "" {
			*startDate = s
		}
		if e := immgo_web.TextInput(ui, immgo.WithAttribute("value", *endDate), immgo.WithAttribute("disabled", !endDateEnabled)); e != "" {
			*endDate = e
		}

		if immgo_web.Button(ui, "Book", immgo.WithAttribute("disabled", !bookEnabled)) {
			// button clicked.
		}
	}))
}
