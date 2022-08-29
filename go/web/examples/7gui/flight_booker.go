package sevengui

import (
	immgo "github.com/snapper-labs/immediate/go"
	web "github.com/snapper-labs/immediate/go/web"
)

var (
	ONE_WAY_FLIGHT = "one-way flight"
	RETURN_FLIGHT  = "return flight"
)

func isValidDate(date string) bool {
	return true
}

func FlightBooker(ui *immgo.RenderNode) {
	col := web.Col(ui)

	choice := Dropdown(col, []string{ONE_WAY_FLIGHT, RETURN_FLIGHT})
	startDate, setStartDate := immgo.State(col, "2014-11-12")
	endDate, setEndDate := immgo.State(col, "2014-11-12")

	endDateEnabled := choice == RETURN_FLIGHT
	bookEnabled := *endDate >= *startDate

	setStartDate(web.TextInput(col, web.TextInputOptions{Value: *startDate}))
	setEndDate(web.TextInput(col, web.TextInputOptions{Value: *endDate, Disabled: !endDateEnabled}))

	if web.Button(ui, web.ButtonOptions{Label: "Book", Disabled: !bookEnabled}) {
		// button clicked.
	}
}
