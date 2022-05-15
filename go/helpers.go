package immgo

// helpers.go contains a set of helper methods that provides ergonomic
// implementations of common needs.
//
// It's worth noting that all of these methods could be implemented against the
// public API of the shadow tree / render tree. They are not "special" from the
// perspective of the core framework.


// Render is a wrapper around `ui.Render(NewRenderNode(...))` that uses the
// options pattern for ergonomics.
//
// It returns the matched *ShadowNode (or nil if the RenderNode was not
// matched), as well as the *RenderNode it created.
func Render(ui *Renderer, opts ...RenderOption) (*ShadowNode, *RenderNode) {
	options := renderOptions{}
	for _, opt := range opts {
		opt(&options)
	}

	renderNode := NewRenderNode(options.key, options.kind, options.props)
	shadowNode := ui.Render(renderNode)

	if options.childFunc != nil {
		if err := ui.PushRenderParent(renderNode); err != nil {
			panic("Internal library error")
		}

		options.childFunc()
		ui.PopRenderParent(renderNode)
	}

	if options.push {
		if err := ui.PushRenderParent(renderNode); err != nil {
			panic("Internal library error")
		}
	}

	return shadowNode, renderNode
}

type renderOptions struct {
	key string
	kind string
	props Properties
	push bool
	childFunc func()
}

type RenderOption func(*renderOptions)

func WithChildren(f func()) RenderOption {
	return func(opt *renderOptions) {
		opt.childFunc = f
	}
}

func WithKind(kind string) RenderOption {
	return func(opt *renderOptions) {
		opt.kind = kind
		if opt.key == "" {
			opt.key = kind
		}
	}
}

func WithKey(key string) RenderOption {
	return func(opt *renderOptions) {
		opt.key = key
	}
}

func WithProps(props Properties) RenderOption {
	return func(opt *renderOptions) {
		opt.props = props
	}
}

func WithEventHandlers(eventHandlers EventHandlers) RenderOption {
	return func(opt *renderOptions) {
		opt.props.EventHandlers = eventHandlers
	}
}

func WithAttributes(attributes Attributes) RenderOption {
	return func(opt *renderOptions) {
		opt.props.Attributes = attributes
	}
}

func WithAttribute(key string, val interface{}) RenderOption {
	return func(opt *renderOptions) {
		if opt.props.Attributes == nil {
			opt.props.Attributes = Attributes{}
		}

		opt.props.Attributes[key] = val
	}
}

func WithEventHandler(key string, handler func(interface{})) RenderOption {
	return func(opt *renderOptions) {
		if opt.props.EventHandlers == nil {
			opt.props.EventHandlers = EventHandlers{}
		}

		opt.props.EventHandlers[key] = handler
	}
}

func WithOpen() RenderOption {
	return func(opt *renderOptions) {
		opt.push = true;
	}
}

// State returns cached state in the shadow tree.
func State[T any](ui *Renderer, defaultState T, opts ...RenderOption) *T {
	allOpts := append(
		[]RenderOption{
			WithKind("hook"),
			WithAttributes(Attributes{}),
		},
		opts...
	)

	shadowNode, renderNode := Render(
		ui,
		allOpts...
	)

	if shadowNode == nil {
		val := &defaultState
		renderNode.data.properties.Attributes["_state"] = val
		return val
	} else {
		renderNode.data.properties.Attributes["_state"] = shadowNode.data.properties.Attributes["_state"]

		return shadowNode.data.properties.Attributes["_state"].(*T)
	}
}

// TODO: Extract somewhere.
type Option[T any] struct {
	v *T
}

func (this *Option[T]) Set(val T) {
	this.v = &val
}

func (this *Option[T]) HasValue() bool {
	return this.v != nil
}

func (this *Option[T]) Value() T {
	return *this.v
}


// Like `State` but takes a function rather than a default value.
//
// TODO: maybe just remove State and call this State...?
func StateF[T any](ui *Renderer, f func()T, opts ...RenderOption) T {
	var defState Option[T]
	state := State(ui, defState, opts...)

	if !state.HasValue() {
		v := f()
		state.Set(v)
	}

	return state.Value()
}

func Close(ui *Renderer) {
	ui.PopRenderParent(nil)
}

func Changed[T comparable](ui *Renderer, val T) bool {
	state := State(ui, val)
	curr := *state
	*state = val

	if curr == val {
		return true
	} else {
		return false
	}

}
