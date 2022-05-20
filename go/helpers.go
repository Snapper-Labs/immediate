package immgo

// helpers.go contains a set of helper methods that provides ergonomic
// implementations of common needs.
//
// It's worth noting that all of these methods could be implemented against the
// public API of the shadow tree / render tree. They are not "special" from the
// perspective of the core framework.

type StateOptions struct {
	Key string
}

// State returns cached state in the shadow tree.
func State[T any](node *RenderNode, defaultState T, opts StateOptions) *T {
	desc := ElementDescription {
		Kind: "hook",
		Key: opts.Key,
		Properties: Properties{Attributes: Attributes{}},
	}

	renderNode := Render(node, desc)
	shadowNode := renderNode.data.match

	if shadowNode == nil {
		val := &defaultState
		renderNode.data.description.Properties.Attributes["_state"] = val
		return val
	} else {
		renderNode.data.description.Properties.Attributes["_state"] = shadowNode.data.Properties.Attributes["_state"]

		return shadowNode.data.Properties.Attributes["_state"].(*T)
	}
}

type ChangedOptions struct {
	Key string
}

func Changed[T comparable](parent *RenderNode, val T, opts ChangedOptions) bool {
	state := State(parent, val, StateOptions { opts.Key })
	curr := *state
	*state = val

	if curr == val {
		return true
	} else {
		return false
	}
}

func Keyspace(parent *RenderNode, key string) *RenderNode {
	return Render(parent, ElementDescription {
		Kind: "hook",
		Key: key,
		Properties: Properties{},
	})
}
