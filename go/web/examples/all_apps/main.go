package main

import (
	immgo_web "github.com/snapper-labs/immediate/go/web"
	sevenGui "github.com/snapper-labs/immediate/go/web/examples/7gui/app"
	bugReporter "github.com/snapper-labs/immediate/go/web/examples/bug_reporter/app"
)

func main() {
	immgo_web.Handle("7gui", &sevenGui.App{})
	immgo_web.Handle("bug_reporter", &bugReporter.App{})
	immgo_web.Serve("0.0.0.0:8081")
}
