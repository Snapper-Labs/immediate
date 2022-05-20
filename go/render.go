package immgo

import (
	"fmt"
)

func Render(parentNode *RenderNode, description ElementDescription) *RenderNode {
	renderNode := &RenderNode{}
	renderNode.data.description = description
	renderNode.data.match = match(parentNode, renderNode)
	parentNode.AppendChild(renderNode)

	return renderNode
}

func match(parentNode *RenderNode, renderNode *RenderNode) *ShadowNode {
	if parentNode.data.match == nil {
		return nil
	}

	shadowChildren := parentNode.data.match.Children()
	renderChildren := parentNode.Children()

	for _, shadowChild := range shadowChildren {
		hasMatch := false
		for _, renderChild := range renderChildren {
			if renderChild.data.match == shadowChild {
				hasMatch = true
			}
		}

		if !hasMatch && getFullKey(shadowChild.data) == getFullKey(renderNode.data.description) {
			return shadowChild
		}
	}

	return nil
}

func getFullKey(desc ElementDescription) string {
	return fmt.Sprintf("%s-%s", desc.Kind, desc.Key)
}
