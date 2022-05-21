package main

import (
	"fmt"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

func Counter(ui *immgo.RenderNode) {
	count := immgo.State(ui, 0)

	row := immgo_web.Row(ui)
	immgo_web.Text(row, immgo_web.TextOptions { Content: fmt.Sprintf("%d", *count) })
	if immgo_web.Button(row, immgo_web.ButtonOptions { Label: "Count" }) {
		*count += 1
	}
}
