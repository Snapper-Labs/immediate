package immgo

import (
	"github.com/apkumar/go-option"
)

// helpers.go implements various "hooks" and helper functions that are common
// needs in immgo applications.
//
// Many of these functions are inspired by React hooks, but contain some
// important differences.

// AddEffects adds `f` to the list of effects to be run before the next render
// starts. The effect will only be called once.
//
// Note that adding an effect, if there are no current effects in the tree, will
// *schedule* a render as well.
func AddEffect(node *RenderNode, key string, f EffectFunc) {
	node.data.description.Properties.Attributes[ImmgoEffects].(*Effects).Add(key, f)
	if node.data.match != nil {
		node.data.match.data.Properties.Attributes[ImmgoEffects].(*Effects).Add(key, f)
	}
}

// Schedule ensures that a render is scheduled to run.
func Schedule(node *RenderNode) {
	AddEffect(node, "schedule", func() {})
}

func Scheduler(node *RenderNode) func(key string, f EffectFunc) {
	effects := NewEffects()

	scheduleFunc := func(key string, f EffectFunc) {
		effects.Add(key, f)
	}

	desc := ElementDescription{
		Kind: "hook",
		Key:  "", // TODO
		Properties: Properties{
			Attributes: Attributes{
				ImmgoEffects: effects,
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

	desc := ElementDescription{
		Kind:       "hook",
		Key:        opts.Key,
		Properties: Properties{Attributes: Attributes{"style": "display: none"}},
	}

	renderNode := Render(node, desc)
	shadowNode := renderNode.data.match

	if shadowNode == nil {
		val := &defaultState
		renderNode.data.description.Properties.Attributes["_state"] = val

		setState := func(newValue T) {
			AddEffect(renderNode, opts.Key, func() {
				*val = newValue
			})
		}

		return val, setState
	} else {
		renderNode.data.description.Properties.Attributes["_state"] = shadowNode.data.Properties.Attributes["_state"]

		r := shadowNode.data.Properties.Attributes["_state"].(*T)

		setState := func(newValue T) {
			AddEffect(renderNode, opts.Key, func() {
				*r = newValue
			})
		}

		return r, setState
	}
}

// Created returns whether the element was just constructed.
func Created(node *RenderNode) bool {
	return node.data.match == nil
}

// AddDestructor adds a function to be called when the element is unmounted.
func AddDestructor(node *RenderNode, f EffectFunc) {
	node.data.description.Properties.Attributes[ImmgoUnmount].(*Effects).Add("destructor", f)
}
