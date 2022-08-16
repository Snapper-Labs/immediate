package immgo

import (
	"fmt"
	"runtime"
	"strings"
)

func Render(parentNode *RenderNode, description ElementDescription) *RenderNode {
	description.fullkey = getFullKey(description)

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

		keyOne := shadowChild.data.fullkey
		keyTwo := renderNode.data.description.fullkey
		if !hasMatch && keyOne == keyTwo {
			return shadowChild
		}
	}

	return nil
}

func getFullKey(desc ElementDescription) string {
	keyParts := []string{desc.Kind, desc.Key}

	maxFrames := 10 
	frameBuff := make([]uintptr, maxFrames)
	// skip Callers, getFullKey, and Render.
	nCallers := runtime.Callers(3, frameBuff)

	frames := runtime.CallersFrames(frameBuff[:nCallers])
	for {
		frame, more := frames.Next()
		keyParts = append(keyParts, frame.Function, frame.File, fmt.Sprint(frame.Line))

		if !more {
			break
		}
	}

	key := strings.Join(keyParts, "-")
	return key
}
