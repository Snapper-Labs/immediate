package immgo_web

import (
	"fmt"

	"github.com/apkumar/immediate/go"
)

type CreateNodeParams struct {
	Id int `json:"id"`
	Kind string `json:"kind"`
}

type DestroyNodeParams struct {
	Id int `json:"id"`
}

type UpdateNodePropertiesParams struct {
	Id int `json:"id"`
	Properties map[string]*string `json:"properties"`
}

type RemoveChildAtParams struct {
	ParentId int `json:"id"`
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
	properties := this.createPropertiesMapForNode(node, props)
	if len(properties) > 0 {
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
		fmt.Println("Triggering event: ", nextEvent)
		props := this.nodeToProps[immgo.HostNode(nextEvent.Target)]
		key := fmt.Sprintf("on%s", nextEvent.Kind)

		handler, exists := props[key]
		if exists {
			realHandler, ok := handler.(func(interface{}))
			if ok {
				realHandler(nextEvent.Event)
			}
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

func (this *DocumentHostTree) createPropertiesMapForNode(node immgo.HostNode, props immgo.Properties) map[string]*string {
	_, exists := this.nodeToProps[node]
	if !exists {
		this.nodeToProps[node] = immgo.Properties {}
	}

	currProps := this.nodeToProps[node]

	var dummy string
	r := make(map[string]*string)
	for k,v := range props {
		switch tv := v.(type) {
		case string:
			curr, exists := currProps[k]
			if exists {
				currString, ok := curr.(string)
				if ok {
					if currString == tv {
						continue
					}
				}
			}

			r[k] = &tv
		default:
			_, exists := currProps[k]
			if exists {
				continue
			}

			r[k] = &dummy
		}
	}

	for k := range currProps {
		_, exists := props[k]
		if !exists {
			r[k] = nil
		}
	}

	this.nodeToProps[node] = props

	return r
}
