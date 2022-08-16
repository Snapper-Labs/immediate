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

// Traverse this node and all children, calling `f` on each.
func (this *Node[T]) Traverse(f func(*Node[T])) {
	f(this)

	children := this.Children()

	for _, child := range children {
		child.Traverse(f)
	}
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

type Attributes = map[string]interface{}
type EventHandlers = map[string]func(event interface{})

// Properties include attributes, which are keyed by attribute name and can be
// any time (though are usually strings), and event handlers, which are keyed by
// event type.
type Properties struct {
	Attributes map[string]interface{}
	EventHandlers map[string]func(event interface{})
}

type ElementDescription struct {
	Key string
	Kind string
	Properties Properties

	// set by the framework
	// todo: move to rendernodedata
	fullkey string
}

type RenderNodeData struct {
	description ElementDescription
	match *ShadowNode
}

type RenderNode = Node[RenderNodeData]

func NewRenderNode(key, kind string, properties Properties) *RenderNode {
	node := NewNode[RenderNodeData]()
	node.data = RenderNodeData {
		description: ElementDescription {
			Key: key,
			Kind: kind,
			Properties: properties,
		},
		match: nil,
	}

	return node
}

type ShadowNode = Node[ElementDescription]

func NewShadowNode(key, kind string, properties Properties) *ShadowNode {
	node := NewNode[ElementDescription]()
	node.data = ElementDescription {
		Key: key,
		Kind: kind,
		Properties: properties,
	}

	return node
}

func NewShadowNodeForRenderNode(renderNode *RenderNode) *ShadowNode {
	r := NewShadowNode(
		renderNode.data.description.Key,
		renderNode.data.description.Kind,
		renderNode.data.description.Properties,
	)
	r.data.fullkey = renderNode.data.description.fullkey
	return r
}

