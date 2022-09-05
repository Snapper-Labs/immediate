package sevengui

import (
	immgo "github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web/intool"
)

var (
	ONE_WAY_FLIGHT = "one-way flight"
	RETURN_FLIGHT  = "return flight"
)

func isValidDate(date string) bool {
	return true
}

func FlightBooker(ui *immgo.RenderNode) {
	col := intool.Col(ui)

	choice := Dropdown(col, []string{ONE_WAY_FLIGHT, RETURN_FLIGHT})
	startDate, setStartDate := immgo.State(col, "2014-11-12")
	endDate, setEndDate := immgo.State(col, "2014-11-12")

	endDateEnabled := choice == RETURN_FLIGHT
	bookEnabled := *endDate >= *startDate

	startDateValue := intool.Input(col, intool.InputOptions{Value: *startDate})
	setStartDate(startDateValue)

	endDateValue := intool.Input(col, intool.InputOptions{Value: *endDate, Disabled: !endDateEnabled})
	setEndDate(endDateValue)

	intool.Button(col, intool.ButtonOptions{Label: "Book", Disabled: !bookEnabled})
}
