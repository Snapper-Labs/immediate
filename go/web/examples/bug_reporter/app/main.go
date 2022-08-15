package app

import (
	"log"
	"time"

	immgo "github.com/snapper-labs/immediate/go"
	immgo_web "github.com/snapper-labs/immediate/go/web"
)

// submit simulates a network call to a backend.
func submit(author, bugType string) {
	time.Sleep(300 * time.Millisecond)

	log.Println("Submitted: ", author, bugType)
}

type App struct{}

func (*App) GetToolkit() immgo_web.Toolkit {
	return &immgo_web.DefaultToolkit{}
}

func (this *App) Render(root *immgo.RenderNode, doc *immgo_web.Document) {
	immgo_web.Text(root, immgo_web.TextOptions{Content: "This app shows how immgo can be used to easily create simple forms that write data to some backend."})

	// FIXME
	form := immgo_web.Div(root)

	// To render a form, we need to nest child elements underneath the form. We
	// do so by simply rendering to the `form` render node, rather than the root
	// one.

	// Layout primitives are similar. Here, we create a Row, so that the
	// following two inputs are rendered horizontally rather than vertically.
	row := immgo_web.Row(form)

	// Rendering functions can return state via return values. Here, we get the
	// current state of our various inputs.
	author := immgo_web.TextInput(row, immgo_web.TextInputOptions{})
	// TODO: selectbox, etc
	bugType := immgo_web.TextInput(row, immgo_web.TextInputOptions{})

	// immgo also comes with helpers to manage state. These helpers are no
	// different than other rendering functions; they follow the same matching
	// rules, and are implemented under the hood as "stateholder" elements that
	// are not reflected in the underlying DOM.
	submitting := immgo.State(root, false)

	if immgo_web.Button(form, immgo_web.ButtonOptions{Label: "Submit", Disabled: *submitting}) {
		// Here, we directly write to the `submitting` variable in a goroutine.
		// immgo runs all of the app logic for a client in a single goroutine,
		// so the developer only needs to ensure their own code is threadsafe.
		// In this case, we only have one goroutine at a time; but if we had
		// more complicated parallelism, we could use standard Go techniques to
		// ensure safety.
		go func() {
			*submitting = true
			submit(author, bugType)
			*submitting = false
		}()
	}
}
