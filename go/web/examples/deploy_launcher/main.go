package main

import (
	"flag"
	"fmt"
	"os"

	immgo_web "github.com/snapper-labs/immediate/go/web"
	app "github.com/snapper-labs/immediate/go/web/examples/deploy_launcher/app"
)

func main() {
	var buildkiteAPIToken string

	flag.StringVar(&buildkiteAPIToken, "buildkite-api-token", os.Getenv("BUILDKITE_API_TOKEN"), "API token for buildkite")

	if len(buildkiteAPIToken) == 0 {
		fmt.Fprintln(os.Stderr, "Buildkite API token is missing")
		os.Exit(1)
	}

	app, err := app.NewApp(buildkiteAPIToken)
	if err != nil {
		panic(err)
	}

	immgo_web.Handle("deploy", app)
	immgo_web.Serve("localhost:8081")
}
