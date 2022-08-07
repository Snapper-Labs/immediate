package main

import (
	immgo_web "github.com/snapper-labs/immediate/go/web"
	"github.com/snapper-labs/immediate/go/web/examples/bug_reporter/app"
)

func main() {
	immgo_web.Handle("bug_reporter", &app.App{})
	immgo_web.Serve("localhost:8081")
}
