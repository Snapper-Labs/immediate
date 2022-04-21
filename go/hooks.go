package immgo

type renderOptions struct {
	key string
	kind string
	props Properties
	push bool
	returnTo **RenderNode
}

type RenderOption func(*renderOptions)

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

func withReturnRenderNode(returnTo **RenderNode) RenderOption {
	return func(opt *renderOptions) {
		opt.returnTo = returnTo
	}
}

// Render is a wrapper around `ui.Render(NewRenderNode(...))` that uses the
// options pattern for ergonomics.
func Render(ui *Renderer, opts ...RenderOption) *ShadowNode {
	options := renderOptions{}
	for _, opt := range opts {
		opt(&options)
	}

	renderNode := NewRenderNode(options.key, options.kind, options.props)
	shadowNode := ui.Render(renderNode)

	if options.push {
		if err := ui.PushRenderParent(renderNode); err != nil {
			panic("Internal library error")
		}
	}

	if options.returnTo != nil {
		*options.returnTo = renderNode
	}

	return shadowNode
}


func State[T any](ui *Renderer, defaultState T) *T {
	var renderNodePtr *RenderNode
	shadowNode := Render(
		ui,
		withReturnRenderNode(&renderNodePtr),
		WithKind("hook"),
		WithAttributes(Attributes{}))

	renderNode := *renderNodePtr

	if shadowNode == nil {
		val := &defaultState
		renderNode.data.properties.Attributes["_state"] = val
		return val
	} else {
		renderNode.data.properties.Attributes["_state"] = shadowNode.data.properties.Attributes["_state"]

		return shadowNode.data.properties.Attributes["_state"].(*T)
	}
}

func Close(ui *Renderer) error {
	return ui.PopRenderParent(nil)
}

func Changed[T comparable](ui *Renderer, curr T) bool {
	last := State(ui, curr)
	ret := *last == curr

	*last = curr
	return ret
}

func FirstRender(ui *Renderer) bool {
	return Changed(ui, "")
}
