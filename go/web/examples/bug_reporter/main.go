package bugreporter

import (
	"log"
	"time"

	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
)

// submit simulates a network call to a backend.
func submit(author, bugType string) {
	time.Sleep(300 * time.Millisecond)

	log.Println("Submitted: ", author, bugType)
}

func Render(root *immgo.RenderNode) {
	web.Text(root, "This app shows how immgo can be used to easily create simple forms that write data to some backend.")

	// FIXME
	form := web.Div(root)

	// To render a form, we need to nest child elements underneath the form. We
	// do so by simply rendering to the `form` render node, rather than the root
	// one.

	// Layout primitives are similar. Here, we create a Row, so that the
	// following two inputs are rendered horizontally rather than vertically.
	row := web.Row(form)

	// Rendering functions can return state via return values. Here, we get the
	// current state of our various inputs.
	author := web.TextInput(row, web.TextInputOptions{})
	// TODO: selectbox, etc
	bugType := web.TextInput(row, web.TextInputOptions{})

	// immgo also comes with helpers to manage state. These helpers are no
	// different than other rendering functions; they follow the same matching
	// rules, and are implemented under the hood as "stateholder" elements that
	// are not reflected in the underlying DOM.
	submitting, setSubmitting := immgo.State(root, false)

	if web.Button(form, web.ButtonOptions{Label: "Submit", Disabled: *submitting}) {
		// Here, we directly write to the `submitting` variable in a goroutine.
		// immgo runs all of the app logic for a client in a single goroutine,
		// so the developer only needs to ensure their own code is threadsafe.
		// In this case, we only have one goroutine at a time; but if we had
		// more complicated parallelism, we could use standard Go techniques to
		// ensure safety.
		go func() {
			setSubmitting(true)
			submit(author, bugType)
			setSubmitting(false)
		}()
	}
}
