package immgo

type Stack[T any] struct {
	chain []T
}

func NewStack[T any]() *Stack[T] {
	return &Stack[T] {
		chain: []T{},
	}
}

func (this *Stack[T]) Push(val T) {
	this.chain = append(this.chain, val)
}

func (this *Stack[T]) Pop() {
	this.chain = this.chain[:len(this.chain)-1]
}

func (this *Stack[T]) Top() T {
	return this.chain[len(this.chain)-1]
}

func (this *Stack[T]) Len() int {
	return len(this.chain)
}
