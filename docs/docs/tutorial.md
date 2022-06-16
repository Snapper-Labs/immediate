# Core Concepts

On this page, we will go through the core concepts of immediate. Many of the
concepts will feel familiar to those who have used libraries like React, but
there are important differences as well. 

Note that much of the terminology used in Immediate comes from the DOM, since
that is our primary rendering target.

## Rendering Elements

The most basic immediate application looks something like this:

``` golang
package main

import (
	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
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

func (this *app) Render(root *immgo.RenderNode, doc *immgo_web.Document) {
	HelloWorld(root)
}

func main() {
	immgo_web.Serve("localhost:8081", &app{})
}
```

Here, we've created a simple app that renders a single div with the text "Hello,
World". There are a few things to note:

- Our application is just a function: `HelloWorld`. That's a common theme
  throughout `immediate` -- everything, from full applications to encapsulated
  components, are just normal functions.

- `HelloWorld` takes an `*immgo.RenderNode` as an argument, and passes that to
  `Render`. We'll talk about render nodes more as we proceed in this tutorial.

- `app`'s render function additionally takes an `*immgo_web.Document` as an
  argument. We won't use it in this tutorial, as it's specific to `immgo_web`;
  you can think of it as an RPC interface to the browser's `document`.

- We provided `Render` with an `ElementDescription`, not an instantiated
  element. This is a key concept in immediate -- in your application, you
  describe what you want the UI to look like, and immediate figures out how to
  make that happen.

- `HelloWorld` does not _return_ element descriptions, but rather invokes the
  `Render` function with element descriptions as arguments. This is in contrast
  to similar frameworks like React; we will see what we gain by this approach
  later, when we talk about encapsulating state.

Rendering that div looks like a lot of boilerplate, but we wanted to
show the low-level `Render` API -- in practice, you'll use helper functions
rather than `Render` directly. In our case, `immgo_web` provides the helpful
`Text` function, so we can rewrite our app like so:

``` golang
package main

import (
	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)

func HelloWorld(root *immgo.RenderNode) {
        immgo_web.Text(root, "Hello, World")
}

type app struct {}

func (this *app) Render(root *immgo.RenderNode, doc *immgo_web.Document) {
	HelloWorld(root)
}

func main() {
	immgo_web.Serve("localhost:8081", &app{})
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
	backgroundDiv := immgo_web.Div(root, immgo_web.DivOptions {
		Style: immgo_web.Style {
			BackgroundColor: option.Some("green"),
		},
	})

	immgo_web.Text(backgroundDiv, "Hello, World")
}
```

!!! note
    
    We use the `gox/option` package often in immgo. It allows us to provide
    better zero values for various configuration structs.

Notice how we store the render node returned by `Div` in the variable
`backgroundDiv`, and then pass _that_ to `immgo_web.Text`, rather than passing
`root`, as we did before.

## Updating Elements

Element descriptions are immutable. To update the UI, you don't explicitly
modify an element; instead, you produce a new render tree, with new element
descriptions, that describes what you want your new UI to look like.

We can modify our Text call in the following way:

``` golang
immgo_web.Text(
	backgroundDiv,
	fmt.Sprintf("Hello, it is %s", time.Now().Format(time.UnixDate)),
)
```

When you run this code, you should see a ticking timer! 

This brings us to an important design decision in immediate: **your application
is constantly re-rendered.** Immediate will ensure that only what has changed is
actually updated. You don't have to inform immediate in any way that your app
has changed.

!!! note
    Some readers may be concerned about the performance implications of
    their application constantly re-rendering. We have found that most tools
    that are well-suited to be built with immediate are not performance
    intensive enough for this to be an issue, even with many concurrent clients. 

    If your application does have performance issues, you can use `___`s
    -- but this comes with the complexity of having to inform immediate of the
    need to re-render, so we suggest starting with the simpler approach.


## Handling Events

So far, we have described how your application can render content _to_ the UI; we
also need to receive and handle input _from_ the UI. 

We do this by adding _event listeners_ to elements. Let's add a button to our
application, and print whether or not the user has clicked it an odd or even
number of times.

``` golang
func HelloWorld(root *immgo.RenderNode, clicked *int) {
	backgroundDiv := immgo_web.Div(root, immgo_web.DivOptions {
		Style: immgo_web.Style {
			BackgroundColor: option.Some("green"),
		},
	})

        oddOrEven := "odd"
        if *clicked % 2 == 0 {
                oddOrEven = "even"
        }
	immgo_web.Text(
		backgroundDiv,
		fmt.Sprintf("Hello, it is %s. You have clicked the button an %s number of times.", time.Now().Format(time.UnixDate), oddOrEven),
	)

        onClick := func() {
		*clicked += 1
        }

	immgo_web.Button(root, onClick)
}

type app struct {
	clicked int
}

func (this *app) Render(root *immgo.RenderNode, doc *immgo_web.Document) {
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

Immediate allows you to write encapsulated components that _hide_ their internal
state, _render_ content to the render tree, and _return_ exposed state. In this
case, we want a component that stores how many times the user has clicked the
button as internal state, renders a button, and returns whether or not the user
has clicked the button an even number of times as exposed state. We can do that
as follows, using `immgo.State`:

``` golang
func CounterButton(root *immgo.RenderNode) string {
	clicked := immgo.State(0)

	onClick := func() {
		*clicked += 1
	}
	immgo_web.Button(root, onClick)

	oddOrEven := "odd"
	if *clicked % 2 == 0 {
		oddOrEven = "even"
	}

	return oddOrEven
}

func HelloWorld(root *immgo.RenderNode, clicked *int) {
        ...
        str := CounterButton(root)
	immgo_web.Text(
		backgroundDiv,
		fmt.Sprintf("Hello, it is %s. You have clicked the button an %s number of times.", time.Now().Format(time.UnixDate), str),
	)
}
```

Note that we are able to simply _return_ the exposed state, rather than having
to hoist it up via callbacks. This is the main thing we gain by choosing to
render elements by calling `Render` rather than by returning element
descriptions.

This allows us to implement, for example, a Button API that will be familiar to
those used to immediate-mode GUI:

``` golang
	if immgo_web.Button(root) {
                *clicked += 1
        }
```

In fact, many of the built-in components like Button expose this sort of API,
while also taking an event handler as an argument, allowing you to pick which
form you prefer.
