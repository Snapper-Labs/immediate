package main

import (
	_"log"
	"time"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

type app struct {
}

// nil while fetching.
func useDeployableCommits(ui *immgo.Renderer) *[]string {
	commits := immgo.State[*[]string](ui, nil)
	if immgo.FirstRender(ui) {
		go func() {
			// pretend we're fetching commits from BK
			time.Sleep(300 * time.Millisecond)

			*commits = &[]string{"One", "Two", "Three"}
		}()
	}

	return *commits
}

func commitDropdown(ui *immgo.Renderer) string {
	choices := useDeployableCommits(ui)
	if choices == nil {
		immgo_web.Text(ui, "Loading commits...")
		return  ""
	}

	return Dropdown(ui, *choices)
}

func (this *app) Render(ui *immgo.Renderer, doc *immgo_web.Document) {
	if loaded := ShoelaceAssets(ui); !loaded {
		immgo_web.Text(ui, "loading...")
		return 
	}

	choice := commitDropdown(ui)
	immgo_web.Text(ui, choice)
}

func main() {
	immgo_web.Serve("localhost:8080", &app{})
}
