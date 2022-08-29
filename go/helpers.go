package immgo

import (
	"github.com/apkumar/go-option"
)


// helpers.go contains a set of helper methods that provides ergonomic
// implementations of common needs.
//
// It's worth noting that all of these methods could be implemented against the
// public API of the shadow tree / render tree. They are not "special" from the
// perspective of the core framework.

// Scheduler returns a function that can be used to schedule effects.
func Scheduler(node *RenderNode) func(f EffectFunc) {
	effects := NewEffects()

	scheduleFunc := func(f EffectFunc) {
		effects.Add(f)
	}

	desc := ElementDescription {
		Kind: "hook",
		Key: "", // TODO
		Properties: Properties {
			Attributes: Attributes {
				"_immgo_effects": effects,
			},
		},
	}

	Render(node, desc)
	return scheduleFunc
}

type StateOptions struct {
	Key string
}

// State returns cached state in the shadow tree, as well as a function to
// update that state.
func State[T any](node *RenderNode, defaultState T, options ...StateOptions) (*T, func(newValue T)) {
	opts := option.Merge(options...)

	desc := ElementDescription {
		Kind: "hook",
		Key: opts.Key,
		Properties: Properties{Attributes: Attributes{}},
	}
	
	schedule := Scheduler(node)
	
	renderNode := Render(node, desc)
	shadowNode := renderNode.data.match

	if shadowNode == nil {
		val := &defaultState
		renderNode.data.description.Properties.Attributes["_state"] = val

		setState := func(newValue T) {
			schedule(func() {
				*val = newValue
			})
		}

		return val, setState
	} else {
		renderNode.data.description.Properties.Attributes["_state"] = shadowNode.data.Properties.Attributes["_state"]

		r := shadowNode.data.Properties.Attributes["_state"].(*T)

		setState := func(newValue T) {
			schedule(func() {
				*r = newValue
			})
		}

		return r, setState
	}
}

type ChangedOptions struct {
	Key string
}

func Changed[T comparable](parent *RenderNode, val T, options ...ChangedOptions) bool {
	opts := option.Merge(options...)

	state, setState := State(parent, val, StateOptions { opts.Key })
	curr := *state
	setState(val)

	if curr == val {
		return false
	} else {
		return true
	}
}
