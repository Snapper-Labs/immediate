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
		nodeEffects, ok := node.data.Properties.Attributes[ImmgoEffects]
		if ok {
			eff, ok := nodeEffects.(*Effects)
			if !ok {
				log.Debug("_immgo_effects attribute was not an instance of *immgo.Effects.")
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


func Update(hostTree HostTree, hostRoot HostNode, shadowRoot *ShadowNode, render RenderFunc, forceRender bool) error {
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
	if len(effects) > 0 || forceRender {
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

	forceRender := true

	for {
		select {
		case <-ctx.Done():
			return ctx.Err()
		default:
			if err := Update(hostTree, hostRoot, shadowRoot, render, forceRender); err != nil {
				return err
			}

			forceRender = false
			time.Sleep(33 * time.Millisecond)
		}
	}
}

// Driver attaches an immgo application to a node in a HostTree and exposes
// methods to drive the immgo render loop.
type Driver struct {
	hostTree HostTree
	hostRoot HostNode
	render RenderFunc
	shadowRoot *ShadowNode
	isFirstRender bool
}

func NewDriver(hostTree HostTree, hostRoot HostNode, render RenderFunc) *Driver {
	drv := &Driver{
		hostTree: hostTree,
		hostRoot: hostRoot,
		render: render,
		isFirstRender: true,
	}

	drv.shadowRoot = NewShadowNode("root", "root", Properties{})

	return drv
}

func (this *Driver) Update(forceRender bool) error {
	if err := Update(this.hostTree, this.hostRoot, this.shadowRoot, this.render, forceRender || this.isFirstRender); err != nil {
		return err
	}

	this.isFirstRender = false
	return nil
}

func (this *Driver) Loop(ctx context.Context) error {
	for {
		select {
		case <-ctx.Done():
			return ctx.Err()
		default:
			if err := this.Update(false); err != nil {
				return err
			}

			time.Sleep(33 * time.Millisecond)
		}
	}
}
