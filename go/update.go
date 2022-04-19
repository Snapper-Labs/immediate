package immgo

type RenderFunc = func(ui *Renderer)

// Update brings together all of the various phases that go into a single
// update.
func Update(hostTree HostTree, hostNode HostNode, shadowNode *ShadowNode, render RenderFunc) error {
	// trigger at most one event
	err := hostTree.TriggerEvent()
	if err != nil {
		return err
	}

	// render
	renderer := NewRenderer(shadowNode)
	render(renderer)

	// commit
	hostTree.BeginFrame()
	err = renderer.Commit(hostTree, hostNode)
	if err != nil {
		return err
	}

	hostTree.EndFrame()
	return nil
}
