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

// match finds a shadow node in the children of `parentNode`'s match that has
// the same key as the given `renderNode`.
//
// Only shadow nodes _after_ the last matched child are considered. This means
// that matching can never force a re-ordering of shadow nodes.
func match(parentNode *RenderNode, renderNode *RenderNode) *ShadowNode {
	if parentNode.data.match == nil {
		return nil
	}

	shadowChildren := parentNode.data.match.Children()
	renderChildren := parentNode.Children()

	firstEligibleIndex := 0
	for idx, shadowChild := range shadowChildren  {
		hasMatch := false
		for _, renderChild := range renderChildren {
			if renderChild.data.match == shadowChild {
				hasMatch = true
			}
		}

		if hasMatch {
			firstEligibleIndex = idx + 1
		}
	}

	if firstEligibleIndex >= len(shadowChildren) {
		return nil
	}


	for _, shadowChild := range shadowChildren[firstEligibleIndex:] {
		keyOne := shadowChild.data.fullkey
		keyTwo := renderNode.data.description.fullkey
		if keyOne == keyTwo {
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
		if frame.Function == "github.com/snapper-labs/immediate/go.Update" {
			break
		}

		keyParts = append(keyParts, frame.Function, frame.File, fmt.Sprint(frame.Line))

		if !more {
			break
		}
	}

	key := strings.Join(keyParts, "-")
	return key
}
