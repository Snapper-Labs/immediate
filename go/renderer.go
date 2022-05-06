package immgo

import (
	"fmt"
)

// Renderer can be thought of as the data structure that holds the state of a
// render phase. It is the public-facing API for applications to render content
// to the host.
type Renderer struct {
	shadowStack *Stack[*ShadowNode]
	renderStack *Stack[*RenderNode]

	reconciliationState map[*ShadowNode]*RenderNode
}

// NewRenderer begins a Render phase at the given shadow node.
func NewRenderer(shadowRoot *ShadowNode) *Renderer {
	shadowStack := NewStack[*ShadowNode]()
	renderStack := NewStack[*RenderNode]()
	reconciliationState := make(map[*ShadowNode]*RenderNode)

	// create a dummy render node to serve as the match for the shadow root. 
	renderRoot := NewRenderNode("_root_", "_root_", Properties{})

	shadowStack.Push(shadowRoot)
	renderStack.Push(renderRoot)

	reconciliationState[shadowRoot] = renderRoot

	return &Renderer {
		shadowStack: shadowStack,
		renderStack: renderStack,
		reconciliationState: reconciliationState,
	}
}

func (this *Renderer) Render(renderNode *RenderNode) *ShadowNode {
	shadowParent := this.shadowStack.Top()
	renderParent := this.renderStack.Top()

	// In all cases, we're going to attach this render node to the current
	// render parent.
	renderParent.AppendChild(renderNode)

	// Try to match this node against the shadow tree.
	if shadowParent == nil {
		// We're in a subtree of an unmatched node. No matching can be done,
		// just move on.
		return nil
	} else {
		// Otherwise, let's try to match this node to the current shadow parent.
		matchIndex := this.match(shadowParent, renderNode)
		if matchIndex >= 0 {
			// If we found a match, record it and return it.
			shadowChild := shadowParent.Children()[matchIndex]
			this.reconciliationState[shadowChild] = renderNode
			return shadowChild
		} 
	}

	return nil
}

func (this *Renderer) PushRenderParent(renderNode *RenderNode) error {
	shadowParent := this.shadowStack.Top()
	renderParent := this.renderStack.Top()

	// Validate that this is a child of the current render parent.
	if !renderParent.HasChild(renderNode) {
		return fmt.Errorf("Renderer.PushRenderParent: argument `renderNode` is not a child of the current render parent.")
	}

	// See if this render node had a match. If so, push it as well.
	if shadowParent != nil {
		shadowChildren := shadowParent.Children()
		pushed := false
		for _, child := range shadowChildren {
			if this.reconciliationState[child] == renderNode {
				this.shadowStack.Push(child)
				pushed = true
			}
		}

		// If this render node was not matched, we push a nil value, to signify
		// for later that we are in a subtree that is unmatched.
		if !pushed {
			this.shadowStack.Push(nil)
		}
	} else {
		this.shadowStack.Push(nil)
	}

	this.renderStack.Push(renderNode)
	return nil
}

func (this *Renderer) PopRenderParent(renderNode *RenderNode) error {
	renderParent := this.renderStack.Top()

	// Validate that this is the render parent.
	if renderNode != nil && renderParent != renderNode {
		return fmt.Errorf("Renderer.PopRenderParent: argument `renderNode` is not the current render parent.")
	}

	this.shadowStack.Pop()
	this.renderStack.Pop()
	return nil
}

// Commit applies the changes from this render phase to the given host tree. 
//
// One note about the implementation here is that it creates host tree nodes
// corresponding to hook nodes. I'd like to fix that; there shouldn't be
// anything reflected in the host tree corresponding to hooks.
func (this *Renderer) Commit(hostTree HostTree, hostNode HostNode) error {
	if this.shadowStack.Len() != 1 || this.renderStack.Len() != 1 {
		return fmt.Errorf("Renderer.Commit: Not all calls to `PushRenderParent` were matched with calls to `PopRenderParent` (shadowStack: %d, renderStack: %d", this.shadowStack.Len(), this.renderStack.Len())
	}

	shadowRoot := this.shadowStack.Top()
	return this.commitAt(shadowRoot, hostNode, hostTree)
}

func (this *Renderer) commitAt(shadowNode *ShadowNode, hostNode HostNode, hostTree HostTree) error {
	renderNode := this.reconciliationState[shadowNode]
	if renderNode == nil {
		return fmt.Errorf("Internal Library Error: no match found for shadow node within commitAt")
	}

	// update our properties
	shadowNode.data.properties = renderNode.data.properties
	if err := hostTree.UpdateNodeProperties(hostNode, shadowNode.data.properties); err != nil {
		return err
	}

	// delete unmatched children
	shadowChildren := shadowNode.Children()
	hostChildren, err := hostTree.GetChildren(hostNode)
	if err != nil {
		return err
	}
	removed := 0
	for index, child := range shadowChildren {
		_, matched := this.reconciliationState[child]

		if !matched {
			// clean up shadow node
			f, exists := shadowNode.data.properties.EventHandlers["_immgo_unmount"]
			if exists {
				f(struct{}{})
			}
			
			shadowNode.RemoveChildAt(index - removed)
			err := hostTree.RemoveChildAt(hostNode, index - removed)
			if err != nil {
				return err
			}
			hostTree.DestroyNode(hostChildren[index])
			removed += 1
		} 
	}

	// reorder children (TODO: We might want to just avoid this in `match`. This
	// is currently a bug!)

	// create new children
	renderChildren := renderNode.Children()
	for index, child := range renderChildren {
		_, matched := this.getMatchForRenderNode(child)
		if !matched {
			newShadowNode := NewShadowNodeForRenderNode(child)
			// Add this to the reconciliation state for the benefit of
			// the recursion.
			this.reconciliationState[newShadowNode] = child
			shadowNode.InsertChildAt(newShadowNode, index)

			newHostNode, err := hostTree.CreateNode(child.data.kind)
			if err != nil {
				return err
			}
			err = hostTree.InsertChildAt(hostNode, newHostNode, index)
			if err != nil {
				return err
			}
		} 
	}

	// recurse down the shadow tree.
	//
	// At this point, we expect the shadow tree and host tree to be in sync at
	// this level.
	shadowChildren = shadowNode.Children()
	hostChildren, err = hostTree.GetChildren(hostNode)
	if err != nil {
		return err
	}
	if len(shadowChildren) != len(hostChildren) {
		return fmt.Errorf("Internal Library Error; host tree and shadow tree out of sync.")
	}

	for index, child := range shadowChildren {
		this.commitAt(child, hostChildren[index], hostTree)
	}

	return nil
}


// match attemps to match `renderNode` to one of `shadowParent`'s children.
//
// A match is found if **any** of `shadowParent`'s unmatched children share the
// same key as `renderNode`. 
//
// Returns the child index of the match, or -1 if none was found.
func (this *Renderer) match(shadowParent *ShadowNode, renderNode *RenderNode) int {
	children := shadowParent.Children()
	for index, child := range children {
		_, hasMatch := this.reconciliationState[child]
		if !hasMatch && child.data.key == renderNode.data.key {
			return index
		}
	}

	return -1
}

func (this *Renderer) getMatchForRenderNode(renderNode *RenderNode) (*ShadowNode, bool) {
	for k, v := range this.reconciliationState {
		if v == renderNode {
			return k, true
		}
	}

	return nil, false
}
