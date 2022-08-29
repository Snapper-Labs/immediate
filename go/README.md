Quick Example
--------------

```
package main

import (
	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
)

type app struct {}

func (this *app) Render(ui *immgo.RenderNode, doc *web.Document) {
        web.Div(ui, web.DivOptions { TextContent: "Hello, World!" })
}

func main() {
	web.Mount("localhost:8081", &app{})
}
```
