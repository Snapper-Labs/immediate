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
		ui.PushRenderParent(renderNode)
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



func Close(ui *Renderer) {
	ui.PopRenderParent(nil)
}
