package main

import (
	"fmt"

	"github.com/apkumar/immediate/go"
	"github.com/apkumar/immediate/go/web"
)


type app struct {
	db *Database
}

func (this *app) Render(ui *immgo.Renderer, doc *immgo_web.Document) {
	immgo_web.Text(ui, "Welcome to the Databases example.")

	values := immgo.State(ui, map[string]string{})
	
	immgo_web.Text(ui, "Add a key to watch")
	currText := immgo_web.TextInput(ui)
	if immgo_web.Button(ui, "Add Watch") {
		(*values)[currText] = ""
		go func() {
			ch := this.db.Watch(currText)
			for val := range ch {
				(*values)[currText] = val
			}
		}()
	}

	for k, v := range *values {
		immgo_web.Text(ui, fmt.Sprintf("Key: %s, value: %s", k, v))
	}

	key := immgo_web.TextInput(ui)
	val := immgo_web.TextInput(ui)
	if immgo_web.Button(ui, "Set Value") {
		this.db.Set(key, val)
	}
}

func main() {
	db := NewDatabase()

	immgo_web.Serve("localhost:8080", &app{db:db})
}
