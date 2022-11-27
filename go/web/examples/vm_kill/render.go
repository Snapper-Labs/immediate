package toolkitdemo

import (
	"fmt"
	"sync"

	"github.com/magefile/mage/sh"
	log "github.com/sirupsen/logrus"
	immgo "github.com/snapper-labs/immediate/go"
	toolkit "github.com/snapper-labs/immediate/go/web/toolkit"
)

type AsyncState[T any] interface {
	Load()
	Error() error
	Running() bool
	Data() T
}

type AsyncStateImpl[T any] struct {
	loader        func() (T, error)
	forceSchedule func()

	mu      sync.Mutex
	running bool
	error   error
	data    T
}

func NewAsyncState[T any](node *immgo.RenderNode, loader func() (T, error)) AsyncState[T] {
	_, forceSchedule := immgo.State(node, "", immgo.StateOptions{Key: "async-state"})
	state := AsyncStateImpl[T]{
		loader:        loader,
		forceSchedule: func() { forceSchedule("") },
	}
	state.Load()
	return &state
}

func (this *AsyncStateImpl[T]) Load() {
	this.mu.Lock()
	defer this.mu.Unlock()
	if this.running {
		return
	}

	this.running = true

	go func() {
		data, err := this.loader()
		//log.Debugf("AsyncStateImpl.Load: data=%v, err=%v", data, err)
		if err != nil {
			this.error = err
		} else {
			this.data = data
		}

		this.running = false

		// Need to trick the scheduler into running when we update internal state.
		// Probably the right way to do this is to use immgo.State to manage internal state.
		this.forceSchedule()
	}()
}

func (this *AsyncStateImpl[T]) Error() error {
	return this.error
}

func (this *AsyncStateImpl[T]) Running() bool {
	return this.running
}

func (this *AsyncStateImpl[T]) Data() T {
	return this.data
}

func Render(ui *immgo.RenderNode) {
	toolkit.Initialize(ui, func() {})

	instances, _ := immgo.State(ui, NewAsyncState(ui, func() (string, error) {
		log.Debugf("Loading instances")
		return sh.Output("gcloud", "compute", "instances", "list", "--format", "json")
	}), immgo.StateOptions{Key: "instances"})

	toolkit.Markdown(ui, "## VM Kill Demo")

	if (*instances).Running() {
		toolkit.Markdown(ui, "Loading...")
	} else if (*instances).Error() != nil {
		toolkit.Markdown(ui, fmt.Sprintf("Error listing instances: %s", (*instances).Error()))
	} else {
		toolkit.Markdown(ui, fmt.Sprintf("Instances: %s", (*instances).Data()))
	}
}
