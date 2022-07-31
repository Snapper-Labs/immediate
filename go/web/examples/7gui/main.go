package main

import (
	immgo_web "github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/examples/7gui/app"
)

func main() {
	immgo_web.Handle("7gui", &app.App{})
	immgo_web.Serve("localhost:8081")
}
