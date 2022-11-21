package immgo

import log "github.com/sirupsen/logrus"

type EffectFunc = func()

type Effect struct {
	Key  string
	Func EffectFunc
}

type Effects struct {
	effects []Effect
}

func NewEffects() *Effects {
	return &Effects{effects: []Effect{}}
}

func (this *Effects) Add(key string, f EffectFunc) {
	wrappedFunc := func() {
		log.Debugf("Effect called: %s", key)
		f()
	}
	this.effects = append(this.effects, Effect{key, wrappedFunc})
}

func (this *Effects) Get() []Effect {
	return this.effects
}

func (this *Effects) Clear() {
	this.effects = []Effect{}
}
