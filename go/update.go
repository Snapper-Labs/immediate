package immgo

func Update(hostTree HostTree, hostRoot HostNode, shadowRoot *ShadowNode, render RenderFunc2) error {

	renderRoot := NewRenderNode("root", "root", Properties{})
	renderRoot.data.match = shadowRoot

	// trigger at most one event
	err := hostTree.TriggerEvent()
	if err != nil {
		return err
	}

	// render
	render(renderRoot)

	// commit
	hostTree.BeginFrame()
	err = Commit(renderRoot, hostRoot, hostTree)
	if err != nil {
		return err
	}

	hostTree.EndFrame()
	return nil
}
