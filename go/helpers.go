package immgo

import (
	"context"

	"github.com/apkumar/gox/option"
)


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
func State[T any](node *RenderNode, defaultState T, options ...StateOptions) *T {
	opts := option.Merge(options...)

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

func Changed[T comparable](parent *RenderNode, val T, options ...ChangedOptions) bool {
	opts := option.Merge(options...)

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

func Do(root *RenderNode, f func(context.Context)) {
	ctx := State(root, context.Background())
	running := State(root, false)
	if !*running {
		go f(*ctx)
	}
	// todo; defer

	*running = true
}
