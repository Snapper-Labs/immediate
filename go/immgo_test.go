package immgo

import (
	"testing"
)

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func TestRendererSimple(t *testing.T) {
	type appState struct {
		numRender int
	}

	// state
	state := &appState{}

	renderFunc := func(parent *RenderNode) {
		if state.numRender < 2 {
			Render(parent, ElementDescription { Kind: "div", Properties: Properties { Attributes: Attributes { "hello": "world" } } })
			node := Render(parent, ElementDescription { Kind: "div", Properties: Properties { Attributes: Attributes { "numRender": state.numRender } } })
			Render(node, ElementDescription { Kind: "div", Properties: Properties { Attributes: Attributes { "hello": "world" } } })
		}

		state.numRender += 1
	}

	hostTree := NewInmemHostTree()
	drv := NewDriver(hostTree, hostTree.GetRoot(), renderFunc)

	// The first update should render the entire tree, since it's the first
	// render.
	check(drv.Update(false))

	// check the tree
	hostRootRef := hostTree.GetNodeRef(hostTree.GetRoot())

	// 2 children (the two divs)
	if len(hostRootRef.Children()) != 2 {
		t.Errorf("Expected 2 children, got %d", len(hostRootRef.Children()))
	}

	// the second div should have one children and the first should have none.
	if len(hostRootRef.Children()[0].Children()) != 0 {
		t.Errorf("Expected 0 children")
	}

	if len(hostRootRef.Children()[1].Children()) != 1 {
		t.Errorf("Expected 1 children")
	}

	// ensure we re-use the same nodes after a second render.
	childrenBefore := hostRootRef.Children()

	// This should _not even trigger a render_, since there are no effects.
	check(drv.Update(false))
	if state.numRender != 1 {
		t.Errorf("Expected numRender to be 1, got %d", state.numRender)
	}

	// This should trigger a render (since we're forcing it), but nothing should
	// change yet.
	check(drv.Update(true))
	childrenAfter := hostRootRef.Children()

	for index := range childrenBefore {
		if childrenBefore[index] != childrenAfter[index] {
			t.Errorf("Children changed (%d, %v vs %v)", index, childrenBefore[index], childrenAfter[index])
		}
	}

	// another forced render should clear out all the children.
	check(drv.Update(true))
	childrenAfter = hostRootRef.Children()
	if len(childrenAfter) != 0 {
		t.Errorf("Expected nodes to be removed; %d", len(childrenAfter))
	}
}
