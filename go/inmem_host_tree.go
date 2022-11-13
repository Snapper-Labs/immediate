package immgo

import (
	"fmt"
)

// InmemHostTree implements `HostTree` using a basic in-memory data structure.
//
// It is primarily intended to be used for testing.
type InmemHostTree struct {
	nodes map[HostNode]*Node[InmemHostNodeData]
	nextNodeId int
	root HostNode
}

type InmemHostNodeData struct {
	kind string
	properties Properties
}

func NewInmemHostTree() *InmemHostTree {
	ht := &InmemHostTree {
		nodes: make(map[HostNode]*Node[InmemHostNodeData]),
		nextNodeId: 0,
	}

	ht.root, _ = ht.CreateNode("root")
	return ht
}

func (this *InmemHostTree) GetRoot() HostNode {
	return this.root
}

func (this *InmemHostTree) BeginFrame() {
}

func (this *InmemHostTree) EndFrame() {
}

func (this *InmemHostTree) CreateNode(kind string) (HostNode, error) {
	id := this.getNextNodeId()

	node := NewNode[InmemHostNodeData]()
	node.data.kind = kind
	this.nodes[id] = node

	return id, nil
}

func (this *InmemHostTree) DestroyNode(node HostNode) error {
	_, exists := this.nodes[node]
	if !exists {
		return fmt.Errorf("Node does not exist")
	}

	delete(this.nodes, node)
	return nil
}

func (this *InmemHostTree) UpdateNodeProperties(node HostNode, props Properties) error {
	nodeRef, exists := this.nodes[node]
	if !exists {
		return fmt.Errorf("Node does not exist")
	}

	nodeRef.data.properties = props
	return nil
}

func (this *InmemHostTree) RemoveChildAt(parent HostNode, index int) error {
	nodeRef, exists := this.nodes[parent]
	if !exists {
		return fmt.Errorf("Node does not exist")
	}

	return nodeRef.RemoveChildAt(index)
}

func (this *InmemHostTree) InsertChildAt(parent HostNode, child HostNode, index int) error {
	parentRef, exists := this.nodes[parent]
	if !exists {
		return fmt.Errorf("Parent does not exist")
	}

	childRef, exists := this.nodes[child]
	if !exists {
		return fmt.Errorf("Child does not exist")
	}

	return parentRef.InsertChildAt(childRef, index)
}

func (this *InmemHostTree) GetChildren(parent HostNode) ([]HostNode, error) {
	parentRef, exists := this.nodes[parent]
	if !exists {
		return []HostNode{}, fmt.Errorf("Parent does not exist")
	}

	children := parentRef.Children()
	r := []HostNode{}
	for _, child := range children {
		r = append(r, this.GetHostNode(child))
	}

	return r, nil
}

func (this *InmemHostTree) TriggerEvent() error {
	// no-op (for now)
	return nil
}

func (this *InmemHostTree) GetNodeRef(hostNode HostNode) *Node[InmemHostNodeData] {
	return this.nodes[hostNode]
}

func (this *InmemHostTree) GetHostNode(node *Node[InmemHostNodeData]) HostNode {
	for k, v := range this.nodes {
		if v == node {
			return k
		}
	}


	return HostNode(-1)
}

func (this *InmemHostTree) getNextNodeId() HostNode {
	r := this.nextNodeId
	this.nextNodeId += 1
	return HostNode(r)
}
