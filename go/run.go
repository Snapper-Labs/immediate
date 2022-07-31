package immgo

import (
	"context"
	"time"

	log "github.com/sirupsen/logrus"
)

type RenderFunc = func(node *RenderNode)

func findEffects(shadowRoot *ShadowNode) []EffectFunc {
	effects := []EffectFunc{}
	traverseFunc := func(node *ShadowNode) {
		nodeEffects, ok := node.data.Properties.Attributes["_immgo_effects"]
		if ok {
			eff, isArr := nodeEffects.(*Effects)
			if !isArr {
				log.Debug("_immgo_effects attribute was not a function array.")
				return
			}
			effects = append(effects, eff.Get()...)
			eff.Clear()
		}
	}

	shadowRoot.Traverse(traverseFunc)
	return effects
}

func rerender(hostTree HostTree, hostRoot HostNode, shadowRoot *ShadowNode, render RenderFunc) error {
	renderRoot := NewRenderNode("root", "root", Properties{})
	renderRoot.data.match = shadowRoot

	// render
	render(renderRoot)

	// commit
	hostTree.BeginFrame()
	err := Commit(renderRoot, hostRoot, hostTree)
	if err != nil {
		return err
	}

	hostTree.EndFrame()
	return nil
}


func Update(hostTree HostTree, hostRoot HostNode, shadowRoot *ShadowNode, render RenderFunc) error {
	// Handle events.
	err := hostTree.TriggerEvent()
	if err != nil {
		return err
	}

	// Handle effects.
	effects := findEffects(shadowRoot)

	for _, effect := range effects {
		effect()
	}

	// If there were any effects, re-render the tree.
	if len(effects) > 0 {
		if err := rerender(hostTree, hostRoot, shadowRoot, render); err != nil {
			return err
		}
	}

	return nil
}


func Run(ctx context.Context, hostTree HostTree, render RenderFunc) error {
	hostTree.BeginFrame()
	hostRoot, _ := hostTree.CreateNode("root")
	hostTree.InsertChildAt(HostNode(-1), hostRoot, 0)
	hostTree.EndFrame()

	shadowRoot := NewShadowNode("root", "root", Properties{})

	if err := rerender(hostTree, hostRoot, shadowRoot, render); err != nil {
		return err
	}

	for {
		select {
		case <-ctx.Done():
			return ctx.Err()
		default:
			if err := Update(hostTree, hostRoot, shadowRoot, render); err != nil {
				return err
			}

			time.Sleep(33 * time.Millisecond)
		}
	}
}
