package main

import (
	"fmt"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

func Counter(ui *immgo.Renderer) {
	count := immgo.State(ui, 0)

	immgo_web.Row(ui)
	immgo_web.Text(ui, fmt.Sprintf("%d", *count))
	if immgo_web.Button(ui, "Count") {
		*count += 1
	}
	immgo.Close(ui)

	// or, an alternative Row API:
	// immgo_web.Row(ui, func() {
	// 	immgo_web.Text(ui, fmt.Sprintf("%d", count))
	// 	if immgo_web.Button(ui, "Count") {
	// 		*count += 1
	// 	}
	// })
}
