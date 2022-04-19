package main

import (
	"time"
)

// A simple in-memory implementation of a key-value store.
type Database struct {
	kv map[string]string
	watches map[string][]chan string
}

func NewDatabase() *Database {
	return &Database {
		kv: make(map[string]string),
		watches: make(map[string][]chan string),
	}
}

func (this *Database) Get(key string) (string, bool) {
	time.Sleep(1*time.Second)

	val, exists := this.kv[key]
	return val, exists
}

func (this *Database) Set(key, value string) {
	time.Sleep(1*time.Second)

	this.kv[key] = value
	watches, exists := this.watches[key]
	if exists {
		for _, watch := range watches {
			this.triggerWatch(key, watch)
		}
	}
}

func (this *Database) Watch(key string) chan string {
	ch := make(chan string)
	curr, exists := this.watches[key] 
	if exists {
		this.watches[key] = append(curr, ch)
	} else {
		this.watches[key] = []chan string{ch}
	}

	this.triggerWatch(key, ch)
	return ch
}

func (this *Database) triggerWatch(key string, watch chan string) {
	val, exists := this.Get(key)
	if exists {
		watch <- val
	}
}
