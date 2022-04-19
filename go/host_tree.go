package immgo

// HostNode is an opaque handle to a node in the host tree.
type HostNode int

// HostTree is an interface around the underlying tree data structure we are
// ultimately writing to.
type HostTree interface {
	// BeginFrame informs the host tree that a commit is beginning. Callers are
	// expected to match calls to `BeginFrame` with calls to `EndFrame`. The
	// host should use these calls to ensure that changes made between them are
	// atomically applied to the underlying tree.
	BeginFrame()

	// EndFrame informs the host tree that all of the changes related to a
	// single commit have been made, and that the commit has ended.
	EndFrame()

	// CreateNode should create a node of type `typ` in the underlying host
	// tree, and return an opaque handle to the created node.
	CreateNode(typ string) (HostNode, error)

	// DestroyNode should destroy a node given a handle returned via
	// `CreateNode`.
	DestroyNode(node HostNode) error

	// UpdateNodeProperties should set the properties of the node referred to by
	// the given handle to `props`.
	UpdateNodeProperties(node HostNode, props Properties) error

	// RemoveChildAt should detach the child at index `index` from the parent
	// node referred to by `parent`.
	RemoveChildAt(parent HostNode, index int) error

	// InsertChildAt should insert the node `child` under the parent `parent`
	// such that it is at index `index` in the children.
	InsertChildAt(parent HostNode, child HostNode, index int) error

	// GetChildren should return the children of `parent`.
	GetChildren(parent HostNode) ([]HostNode, error)

	// TriggerEvent should trigger a single event from the underlying host tree.
	// It should not block.
	TriggerEvent() error
}
