package main

import (
	log "github.com/sirupsen/logrus"

	immgo_web "github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/examples/7gui/app"
)

func main() {
	log.SetLevel(log.TraceLevel)
	immgo_web.Handle("7gui", &app.App{})
	immgo_web.Serve("localhost:8081")
}
