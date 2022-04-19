package immgo

func State[T any](ui *Renderer, defaultState T) *T {
	renderNode := NewRenderNode("hook", "hook", make(map[string]interface{}))
	shadowNode := ui.Render(
		renderNode,
	)

	if shadowNode == nil {
		val := &defaultState
		renderNode.data.properties["_state"] = val
		return val
	} else {
		renderNode.data.properties["_state"] = shadowNode.data.properties["_state"]

		return shadowNode.data.properties["_state"].(*T)
	}
}

type renderOptions struct {
	key string
	kind string
	props Properties
	push bool
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

func WithOpen() RenderOption {
	return func(opt *renderOptions) {
		opt.push = true;
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

	return shadowNode
}

func Close(ui *Renderer) {
	ui.PopRenderParent(nil)
}
