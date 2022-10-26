# Core Concepts

On this page, we will go through the core concepts of immediate. Many of the
concepts will feel familiar to those who have used libraries like React, but
there are important differences as well. You'll notice that much of the
terminology used in Immediate comes from the DOM.

## Rendering Elements

The most basic immediate application looks something like this:

``` golang
package main

import (
	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
)

func HelloWorld(root *immgo.RenderNode) {
	immgo.Render(
		root,
		immgo.ElementDescription {
			Kind: "div",
			Properties: immgo.Properties {
				Attributes: immgo.Attributes {
					"textContent": "Hello, World",
				},
			},
		},
	)
}

type app struct {}

func (this *app) Render(root *immgo.RenderNode, doc *web.Document) {
	HelloWorld(root)
}

func main() {
	web.Mount("localhost:8081", &app{})
}
```

Here, we've created a simple app that renders a single div with the text "Hello,
World". There are a few things to note:

- Our application is just a function: `HelloWorld`. That's a common theme
  throughout `immediate` -- everything, from full applications to encapsulated
  components, are just normal functions.

- `HelloWorld` takes an `*immgo.RenderNode` as an argument, and passes that to
  `Render`. We'll talk about render nodes more as we proceed in this tutorial.

- `app`'s render function additionally takes an `*web.Document` as an
  argument. You can think of it as an RPC interface to the browser's `document`;
  we'll use it later in this tutorial.

- We provided `Render` with an `ElementDescription`, not an instantiated
  element. This is a key concept in immediate -- in your application, you
  describe what you want the UI to look like, and immediate figures out how to
  make that happen.

- `HelloWorld` does not _return_ element descriptions (as in, for example,
  React), but rather invokes the `Render` function with element descriptions as
  arguments. This is in contrast to similar frameworks like React; we will see
  what we gain by this approach later, when we talk about encapsulating state.

Rendering that div looks like a lot of boilerplate, but we wanted to show the
low-level `Render` API -- in practice, you'll use helper functions rather than
`Render` directly. In our case, the `web` package provides the helpful `Div` function:

``` golang
func HelloWorld(root *immgo.RenderNode) {
        web.Div(root, web.DivOptions {
                TextContent: "Hello, World",
        })
}
```

!!! note

    The `web` package provides a set of functions that wrap the basic DOM elements
    provided by the browser. In practice, we expect most developers will use the
    `toolkit` package, which provides a set of higher-level building blocks for
    creating internal tools. However, in this tutorial, in order to focus on a
    conceptual understanding of Immediate, we will stick to components provided by
    the `web` package.


Since we'll be displaying simple text content often in this tutorial, let's make
a quick helper function to do so:

``` golang
func Text(root *immgo.RenderNode, content string) {
        web.Div(root, web.DivOptions {
                TextContent: content,
        })
}
```


## Rendering Hierarchy

To build real applications, you will need to render a hierarchy of elements. We
do this using `*immgo.RenderNode`s. When you call `Render` on an
`*immgo.RenderNode`, what you are rendering is placed _under_ that node.
`Render` will also _return_ a new render node, corresponding to the element that
it created. Putting those two facts together, we can render our "Hello, World"
text in a green background as follows:

``` golang
import (
        ...
	"github.com/apkumar/gox/option"
)

func HelloWorld(root *immgo.RenderNode) {
	backgroundDiv := web.Div(root, web.DivOptions {
		Style: web.Style {
			BackgroundColor: option.Some("green"),
		},
	})

        Text(root, "Hello, World")
}
```

!!! note
    
    We use the `gox/option` package often in immgo. It allows us to provide
    better zero values for various configuration structs.

Notice how we store the render node returned by `Div` in the variable
`backgroundDiv`, and then pass _that_ to `web.Text`, rather than passing
`root`, as we did before.

## Updating Elements

Element descriptions are immutable. To update the UI, you don't explicitly
modify an element; instead, you produce a new render tree, with new element
descriptions, that describes what you want your new UI to look like. Consider
the following modification to our `HelloWorld` function:

``` golang
func HelloWorld(root *immgo.RenderNode) {
	backgroundDiv := web.Div(root, web.DivOptions {
		Style: web.Style {
			BackgroundColor: option.Some("green"),
		},
	})

        Text(
          root, 
          fmt.Sprintf("Hello, it is %s", time.Now().Format(time.UnixDate))
        )
}
```

If you run this code, you'll notice that nothing is changing. The reason is that
Immediate has no way of knowing that a re-render would produce a different
render tree; we could simply re-render the application all the time, but this
would be too much of a performance hit for mostly-unchanging applications.
Instead, we need some way of informing Immediate that a re-render is necessary.
We can do this with `immgo.Schedule`:

``` golang
func HelloWorld(root *immgo.RenderNode) {
	backgroundDiv := web.Div(root, web.DivOptions {
		Style: web.Style {
			BackgroundColor: option.Some("green"),
		},
	})

        Text(
          root, 
          fmt.Sprintf("Hello, it is %s", time.Now().Format(time.UnixDate))
        )

        immgo.Schedule(root)
}
```


!!! note

    We are showing this use of `immgo.Schedule` to give a sense of how the
    Immediate runtime works under the hood. In practice, we don't expect users
    to have to use `immgo.Schedule` directly; as we proceed, we'll see how the
    framework provides higher-level abstractions that schedule updates
    appropriately.

## Reconciliation

TODO



## Handling Events

So far, we have described how your application can render content _to_ the UI; we
also need to receive and handle input _from_ the UI. 

We do this by adding _event listeners_ to elements. Let's add a button to our
application, and display whether the user has clicked the button an odd or even
number of times.

``` golang
func HelloWorld(root *immgo.RenderNode, clicked *int) {
	onClick := func() {
		fmt.Println("User clicked on button.")
		*clicked += 1
	}

	oddOrEven := "odd"
	if *clicked % 2 == 0 {
		oddOrEven = "even"
	}

	Text(root, oddOrEven)
	web.Button(root, onClick, web.ButtonOptions { Label: "Click Me" })
}


type app struct {
        int clicked
}

func (this *app) Render(root *immgo.RenderNode, doc *web.Document) {
	HelloWorld(root, &this.clicked)
}
```

!!! note
    All of the events for a given client are handled on a single thread, so you
    don't need to worry about synchronization unless you're operating on data
    shared across multiple clients.


## Encapsulation

The above code works, but it requires us to add a `clicked` state to our `app`,
and pass it into our HelloWorld function. In a more complex application, this
may require us to thread this state through many function calls, before finally
getting to the function that needs it. Additionally, any state that should
_semantically_ be "internal" to some part of your app must nonetheless be
hoisted up to the top, so that it can be threaded through as well.

To alleviate these issues, Immediate allows you to write encapsulated components
that _hide_ their internal state, _render_ content to the render tree, and
_return_ exposed state. In this case, we want a component that stores how many
times the user has clicked the button as internal state, renders a button, and
returns whether or not the user has clicked the button an even number of times
as exposed state. We can do that using `immgo.State`:

``` golang
func CounterButton(root *immgo.RenderNode) string {
	clicked, setClicked := immgo.State(root, 0)

	onClick := func() {
		fmt.Println("User clicked on button.")
		setClicked(*clicked + 1)
	}

	web.Button(root, onClick, web.ButtonOptions { Label: "Click me" })

	oddOrEven := "odd"
	if *clicked % 2 == 0 {
		oddOrEven = "even"
	}

	return oddOrEven
}

func HelloWorld(root *immgo.RenderNode, clicked *int) {
	oddOrEven := CounterButton(root)
	web.Text(root, oddOrEven)
}
```

Note that we are able to simply _return_ the exposed state, rather than having
to hoist it up via callbacks. This allows us to implement, for example, a Button
API that will be familiar to those used to immediate-mode GUI:

``` golang
func ImmediateButton(root *immgo.RenderNode, options ...web.ButtonOptions) bool {
	clicked, setClicked := immgo.State(root, false)

	onClick := func() {
		setClicked(true)
	}

	web.Button(root, onClick, options...)

	returnValue := *clicked
	setClicked(false)

	return returnValue
}
```

Most of the low-level built-in components like Button prefer the event-handler
style API, since that's closer to how Immediate works under the hood; but it is
easy to create immediate-mode APIs such as `ImmediateButton` above if you
prefer.

## Working With the Element Lifecycle

Because the user-facing Immediate API deals with element _descriptions_, rather
than the elements themselves, we must provide explicit ways for developers to
hook into lifecycle events such as element creation and destruction. These take
the form of `immgo.Created` and `immgo.AddDestructor`:

``` golang
text := Text(root, "Some text")
if immgo.Created(text) {
        // Do something on creation.

        // Clean it up on destruction
        immgo.AddDestructor(func() {})
}
```
