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
