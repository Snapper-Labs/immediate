package main

import (
	_"log"
	"fmt"
	"time"

	"github.com/buildkite/go-buildkite/v3/buildkite"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

func must(err error) {
	if err != nil {
		panic(err)
	}
}

func createClient() *buildkite.Client {
	apiToken := "3f74c5067590eed9fec5021bc4a85518f0806657"
	config, err := buildkite.NewTokenConfig(apiToken, false)
	must(err)

	client := buildkite.NewClient(config.Client())
	return client
}

// TODO: Extract somewhere.
type Result[T any] struct {
	Value T
	Err error
}

func fetchBuilds(cli *buildkite.Client) chan Result[[]buildkite.Build] {
	ch := make(chan Result[[]buildkite.Build])
	go func() {
		builds, _, err := cli.Builds.ListByPipeline("snapper-labs", "build", nil)
		ch <- Result[[]buildkite.Build]{Value: builds, Err: err}
	}()
	return ch
}


// TODO: Extract somewhere.
func future[T any](ch chan T) chan T {
	fut := make(chan T)
	go func() {
		val := <-ch
		for {
			fut <- val
		}
	}()
	return fut
}

// TODO: Extract somewhere.
func getChannel[T any](ch chan T, timeout time.Duration) (T, bool) {
	var def T
	select {
	case v := <- ch:
		return v, true
	case <-time.After(timeout):
		return def, false
	}
}

type app struct{}

func (this *app) Render(ui *immgo.Renderer, doc *immgo_web.Document) {
	client := immgo.StateF(ui, createClient)
	buildsCh := immgo.StateF(ui, func()chan Result[[]buildkite.Build] { return future(fetchBuilds(client)) })

	builds, ok := getChannel(buildsCh, 0)
	if !ok {
		immgo_web.Text(ui, "Loading...")
		return
	} 

	immgo_web.Text(ui, fmt.Sprintf("Got %d builds", len(builds.Value)))
	for _, build := range builds.Value {
		immgo_web.Text(ui, fmt.Sprintf("Build commit: %s, branch: %s", *build.Commit, *build.Branch))
	}
}

func main() {
	immgo_web.Serve("localhost:8080", &app{})
}
