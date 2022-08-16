package immgo

type EffectFunc = func()

type Effects struct {
	effects []EffectFunc
}

func NewEffects() *Effects {
	return &Effects{effects: []EffectFunc{}}
}

func (this *Effects) Add(f EffectFunc) {
	this.effects = append(this.effects, f)
}

func (this *Effects) Get() []EffectFunc {
	return this.effects
}

func (this *Effects) Clear() {
	this.effects = []EffectFunc{}
}
