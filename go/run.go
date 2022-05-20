package immgo

import (
	"context"
	"time"
)

type RenderFunc2 = func(node *RenderNode)

func Run(ctx context.Context, hostTree HostTree, render RenderFunc2) error {
	hostTree.BeginFrame()
	hostRoot, _ := hostTree.CreateNode("root")
	hostTree.InsertChildAt(HostNode(-1), hostRoot, 0)
	hostTree.EndFrame()

	shadowRoot := NewShadowNode("root", "root", Properties{})

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
