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

	renderFunc := func(ui *Renderer) {
		state.numRender += 1

		Render(ui, WithKind("div"), WithAttributes(Attributes{ "hello": "world" }))
		Render(ui, WithKind("div"), WithAttributes(Attributes{ "numRender": state.numRender }), WithOpen())
		Render(ui, WithKind("div"), WithAttributes(Attributes{ "hello": "child"}))
		Close(ui)
	}

	hostTree := NewInmemHostTree()
	hostRoot, err := hostTree.CreateNode("root")
	check(err)

	shadowRoot := NewShadowNode("root", "root", Properties{})

	Update(hostTree, hostRoot, shadowRoot, renderFunc)

	// check the tree
	hostRootRef := hostTree.GetNodeRef(hostRoot)

	// 2 children (the two divs)
	if len(hostRootRef.Children()) != 2 {
		t.Errorf("Expected 2 children")
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

	Update(hostTree, hostRoot, shadowRoot, renderFunc)
	childrenAfter := hostRootRef.Children()

	for index := range childrenBefore {
		if childrenBefore[index] != childrenAfter[index] {
			t.Errorf("Children changed")
		}
	}
}
