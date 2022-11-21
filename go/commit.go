package immgo

import (
	"fmt"

	"github.com/go-test/deep"
	log "github.com/sirupsen/logrus"
)

func Commit(renderNode *RenderNode, hostNode HostNode, hostTree HostTree) error {
	shadowNode := renderNode.data.match
	if shadowNode == nil {
		return fmt.Errorf("Internal Library Error")
	}

	if diff := deep.Equal(renderNode.data.description.Properties, shadowNode.data.Properties); diff != nil {
		log.Debugf("%#v", diff)
	}

	// update our properties
	shadowNode.data.Properties = renderNode.data.description.Properties
	if err := hostTree.UpdateNodeProperties(hostNode, shadowNode.data.Properties); err != nil {
		return err
	}

	// delete unmatched children
	shadowChildren := shadowNode.Children()
	renderChildren := renderNode.Children()
	hostChildren, err := hostTree.GetChildren(hostNode)
	if err != nil {
		return err
	}

	removed := 0
	for index, child := range shadowChildren {
		matched := false
		for _, renderChild := range renderChildren {
			if renderChild.data.match == child {
				matched = true
			}
		}

		if !matched {
			// clean up shadow node
			effects, exists := shadowNode.data.Properties.Attributes[ImmgoUnmount]
			if exists {
				eff, ok := effects.(*Effects)
				if !ok {
					log.Debug("Error: unmount effects is not of type *Effects")
				} else {
					for _, effect := range eff.Get() {
						effect.Func()
					}
				}
			}

			shadowNode.RemoveChildAt(index - removed)
			err := hostTree.RemoveChildAt(hostNode, index-removed)
			if err != nil {
				return err
			}
			hostTree.DestroyNode(hostChildren[index])
			removed += 1
		}
	}

	// note that we do not need to consider re-ordering of children here, as the
	// functionality in `match` never allows it.

	// create new children
	for index, child := range renderChildren {
		matched := child.data.match != nil
		if !matched {
			newShadowNode := NewShadowNodeForRenderNode(child)
			child.data.match = newShadowNode
			shadowNode.InsertChildAt(newShadowNode, index)

			newHostNode, err := hostTree.CreateNode(child.data.description.Kind)
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

	for index, child := range renderChildren {
		Commit(child, hostChildren[index], hostTree)
	}

	return nil
}
