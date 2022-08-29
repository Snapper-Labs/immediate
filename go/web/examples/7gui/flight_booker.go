package sevengui

import (
	immgo "github.com/snapper-labs/immediate/go"
	web "github.com/snapper-labs/immediate/go/web"
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

	onStartDateInput := func(v interface{}) {
		setStartDate(v.(string))
	}

	onEndDateInput := func(v interface{}) {
		setEndDate(v.(string))
	}

	web.Input(col, web.InputOptions{OnInput: onStartDateInput, Value: *startDate})
	web.Input(col, web.InputOptions{OnInput: onEndDateInput, Value: *endDate, Disabled: !endDateEnabled})

	web.Button(ui, web.ButtonOptions{TextContent: "Book", Disabled: !bookEnabled})
}
