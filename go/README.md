Quick Example
--------------

```
package main

import (
        "fmt"
	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
)

type app struct {}

func (this *app) Render(ui *immgo.RenderNode, doc *web.Document) {
        count, setCount := immgo.State(ui, 0)
        onClick := func() {
                setCount(*count + 1)
        }

        web.Div(ui, web.DivOptions { TextContent: fmt.Sprintf("You have clicked the button %d times.", *count) })
        web.Button(ui, web.ButtonOptions { OnClick: onClick, TextContent: "Click" })
}

func main() {
	web.Mount("localhost:8081", &app{})
}
```
