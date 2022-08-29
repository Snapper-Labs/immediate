package web

import (
	"github.com/snapper-labs/immediate/go"
)

type CreateNodeParams struct {
	Id int `json:"id"`
	Kind string `json:"kind"`
}

type DestroyNodeParams struct {
	Id int `json:"id"`
}
type KeyValue struct {
	Key string `json:"key"`
	Value string `json:"value"`
}

type PropertiesUpdate struct {
	NewAttributes []KeyValue `json:"newAttributes"`
	RemovedAttributes []string `json:"removedAttributes"`
	NewEventHandlers []string `json:"newEventHandlers"`
	RemovedEventHandlers []string `json:"removedEventHandlers"`
}

type UpdateNodePropertiesParams struct {
	Id int `json:"id"`
	Properties PropertiesUpdate `json:"propertiesUpdate"`
}

type RemoveChildAtParams struct {
	ParentId int `json:"parentId"`
	Index int `json:"index"`
}

type InsertChildAtParams struct {
	ParentId int `json:"parentId"`
	ChildId int `json:"childId"`
	Index int `json:"index"`
}

type notify struct {
	Method string
	Params interface{}
}

type HandleEventParams struct {
	Target int `json:"target"`
	Kind string `json:"kind"`
	Event interface{} `json:"event"`
}

type DocumentHostTree struct {
	peer *Peer
	frame []notify
	events []HandleEventParams
	nextId immgo.HostNode

	nodeToChildren map[immgo.HostNode][]immgo.HostNode
	nodeToProps map[immgo.HostNode]immgo.Properties
}

func NewDocumentHostTree(peer *Peer) *DocumentHostTree {
	hostTree := &DocumentHostTree {
		peer: peer,
		frame: nil,
		nextId: 0,
		nodeToChildren: make(map[immgo.HostNode][]immgo.HostNode),
		nodeToProps: make(map[immgo.HostNode]immgo.Properties),
	}

	peer.SetMethodHandler("handleEvent", Wrap(func(params HandleEventParams)struct{} {
		hostTree.events = append(hostTree.events, params)

		return struct{}{}
	}))

	return hostTree
}


func (this *DocumentHostTree) BeginFrame() {
	this.frame = []notify{}
}

func (this *DocumentHostTree) EndFrame() {
	// Two passes: creates + updates, then the rest.
	for _, notify := range this.frame {
		if notify.Method == "createNode" || notify.Method == "updateNodeProperties" {
			Notify(this.peer, notify.Method, notify.Params)
		}
	}

	for _, notify := range this.frame {
		if notify.Method != "createNode" && notify.Method != "updateNodeProperties" {
			Notify(this.peer, notify.Method, notify.Params)
		}
	}

	this.frame = nil
}

func (this *DocumentHostTree) CreateNode(kind string) (immgo.HostNode, error) {
	id := this.getNextId()

	this.frame = append(this.frame, notify {
		Method: "createNode",
		Params: CreateNodeParams {
			Id: int(id),
			Kind: kind,
		},
	})


	return id, nil
}

func (this *DocumentHostTree) DestroyNode(node immgo.HostNode) error {
	this.frame = append(this.frame, notify {
		Method: "destroyNode",
		Params: DestroyNodeParams {
			Id: int(node),
		},
	})

	return nil
}

func (this *DocumentHostTree) UpdateNodeProperties(node immgo.HostNode, props immgo.Properties) error {
	properties := this.createPropertyUpdateForNode(node, props)
	if !propertyUpdateIsEmpty(properties) {
		this.frame = append(this.frame, notify {
			Method: "updateNodeProperties",
			Params: UpdateNodePropertiesParams {
				Id: int(node),
				Properties: properties,
			},
		})
	}

	return nil
}

func (this *DocumentHostTree) RemoveChildAt(parent immgo.HostNode, index int) error {
	currChildren := this.nodeToChildren[parent]
	this.nodeToChildren[parent] = append(currChildren[:index], currChildren[index+1:]...)

	this.frame = append(this.frame, notify {
		Method: "removeChildAt",
		Params: RemoveChildAtParams {
			ParentId: int(parent),
			Index: index,
		},
	})

	return nil
}

func (this *DocumentHostTree) InsertChildAt(parent immgo.HostNode, child immgo.HostNode, index int) error {
	currChildren := this.nodeToChildren[parent]
	if index == len(currChildren) {
		this.nodeToChildren[parent] = append(currChildren, child)
	} else {
		this.nodeToChildren[parent] = append(currChildren[:index+1], currChildren[index:]...)
		this.nodeToChildren[parent][index] = child
	}

	this.frame = append(this.frame, notify {
		Method: "insertChildAt",
		Params: InsertChildAtParams {
			ParentId: int(parent),
			ChildId: int(child),
			Index: index,
		},
	})

	return nil
}

func (this *DocumentHostTree) GetChildren(parent immgo.HostNode) ([]immgo.HostNode, error) {
	children := this.nodeToChildren[parent]
	return children, nil
}

func (this *DocumentHostTree) TriggerEvent() error {
	if len(this.events) > 0 {
		nextEvent := this.events[0]
		props := this.nodeToProps[immgo.HostNode(nextEvent.Target)]
		handler, exists := props.EventHandlers[nextEvent.Kind]
		if exists {
			handler(nextEvent.Event)
		}

		this.events = this.events[1:]
	}

	return nil
}

func (this *DocumentHostTree) getNextId() immgo.HostNode {
	r := this.nextId
	this.nextId += 1

	return r
}

func (this *DocumentHostTree) createPropertyUpdateForNode(node immgo.HostNode, props immgo.Properties) PropertiesUpdate {
	_, exists := this.nodeToProps[node]
	if !exists {
		this.nodeToProps[node] = immgo.Properties {}
	}
	update := PropertiesUpdate{
		NewAttributes: []KeyValue{},
		RemovedAttributes: []string{},
		NewEventHandlers: []string{},
		RemovedEventHandlers: []string{},
	}

	currProps := this.nodeToProps[node]
	for k,v := range props.Attributes {
		switch tv := v.(type) {
		case string:
			curr, exists := currProps.Attributes[k]
			if exists {
				currString, ok := curr.(string)
				if ok {
					if currString == tv {
						continue
					}
				}
			}

			update.NewAttributes = append(update.NewAttributes, KeyValue{Key:k, Value:tv})
		case bool:
			// bools are translated into the existence or not of an attribute.

			curr, exists := currProps.Attributes[k]
			if exists {
				currBool, ok := curr.(bool)
				if ok {
					if currBool == tv {
						continue
					}
				}
			}

			if tv {
				update.NewAttributes = append(update.NewAttributes, KeyValue{Key:k, Value:""})
			} else {
				update.RemovedAttributes = append(update.RemovedAttributes, k)
			}
		case Style:
			curr, exists := currProps.Attributes[k]
			if exists {
				currStyle, ok := curr.(Style)
				if ok {
					if currStyle == tv {
						continue
					}
				}
			}

			update.NewAttributes = append(update.NewAttributes, KeyValue{Key:k, Value:tv.String()})


		default:
			// pass
		}
	}

	for k := range currProps.Attributes {
		_, exists := props.Attributes[k]
		if !exists {
			update.RemovedAttributes = append(update.RemovedAttributes, k)
		}
	}

	for k := range props.EventHandlers {
		_, exists := currProps.EventHandlers[k]
		if !exists {
			update.NewEventHandlers = append(update.NewEventHandlers, k)
		}
	}

	for k := range currProps.EventHandlers {
		_, exists := props.EventHandlers[k]
		if !exists {
			update.RemovedEventHandlers = append(update.RemovedEventHandlers, k)
		}
	}


	this.nodeToProps[node] = props

	return update
}

func propertyUpdateIsEmpty(upd PropertiesUpdate) bool {
	return len(upd.NewAttributes) == 0 && len(upd.RemovedAttributes) == 0 && len(upd.NewEventHandlers) == 0 && len(upd.RemovedEventHandlers) == 0
}
