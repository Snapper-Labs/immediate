package main

import (
	immgo_web "github.com/snapper-labs/immediate/go/web"
	sevenGui "github.com/snapper-labs/immediate/go/web/examples/7gui/app"
	bugReporter "github.com/snapper-labs/immediate/go/web/examples/bug_reporter/app"
	deployLauncher "github.com/snapper-labs/immediate/go/web/examples/deploy_launcher/app"
)

func main() {
	deployLauncherApp, err := deployLauncher.NewAppFromEnv()
	if err != nil {
		panic(err)
	}
	immgo_web.Handle("deploy_launcher", deployLauncherApp)
	immgo_web.Handle("7gui", &sevenGui.App{})
	immgo_web.Handle("bug_reporter", &bugReporter.App{})
	immgo_web.Serve("localhost:8081")
}
