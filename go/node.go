package immgo

import (
	"fmt"
)

// Node represents a node in a tree with some arbitrary data of type `T`
// attached.
type Node[T any] struct {
	data T

	firstChild *Node[T]
	nextSibling *Node[T]
}

func NewNode[T any]() *Node[T] {
	// defaults are fine
	return &Node[T] {}
}

func (this *Node[T]) Children() []*Node[T] {
	r := []*Node[T]{}

	curr := this.firstChild
	for {
		if curr == nil {
			break
		}

		r = append(r, curr)
		curr = curr.nextSibling
	}

	return r
}

func (this *Node[T]) RemoveChildAt(index int) error {
	children := this.Children()

	if index < 0 || index >= len(children) {
		return fmt.Errorf("Index past bounds of children")
	}

	if index == 0 {
		this.firstChild = this.firstChild.nextSibling
	} else {
		children[index-1].nextSibling = children[index].nextSibling
	}

	return nil
}

func (this *Node[T]) InsertChildAt(child *Node[T], index int) error {
	children := this.Children()

	if index < 0 || index > len(children) {
		return fmt.Errorf("Index past bounds of children")
	}

	if index == 0 {
		child.nextSibling = this.firstChild
		this.firstChild = child
	} else {
		child.nextSibling = children[index-1].nextSibling
		children[index-1].nextSibling = child
	}

	return nil
}


func (this *Node[T]) AppendChild(child *Node[T]) {
	lastChild := this.LastChild()
	if lastChild == nil {
		this.firstChild = child
	} else {
		lastChild.nextSibling = child
	}
}

func (this *Node[T]) HasChild(node *Node[T]) bool {
	children := this.Children()
	for _, child := range children {
		if child == node {
			return true
		}
	}

	return false
}

func (this *Node[T]) LastChild() *Node[T] {
	if this.firstChild == nil {
		return nil
	}

	curr := this.firstChild
	for {
		if curr.nextSibling == nil {
			return curr
		}

		curr = curr.nextSibling
	}
}


type Properties = map[string]interface{}

type RenderNodeData struct {
	key string
	kind string
	properties Properties
}

type RenderNode = Node[RenderNodeData]

func NewRenderNode(key, kind string, properties Properties) *RenderNode {
	node := NewNode[RenderNodeData]()
	node.data = RenderNodeData {
		key: key,
		kind: kind,
		properties: properties,
	}

	return node
}

// ShadowNodeData is the same as RenderNodeData, but we define a different type
// so that elsewhere in the code it's clear which tree we're talking about
// (shadow tree or render tree).
type ShadowNodeData RenderNodeData

type ShadowNode = Node[ShadowNodeData]

func NewShadowNode(key, kind string, properties Properties) *ShadowNode {
	node := NewNode[ShadowNodeData]()
	node.data = ShadowNodeData {
		key: key,
		kind: kind,
		properties: properties,
	}

	return node
}

func NewShadowNodeForRenderNode(renderNode *RenderNode) *ShadowNode {
	return NewShadowNode(
		renderNode.data.key,
		renderNode.data.kind,
		renderNode.data.properties,
	)
}

