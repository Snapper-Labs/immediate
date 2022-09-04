package toolkit

import (
	"fmt"
	_ "embed"
	"encoding/base64"

	"github.com/snapper-labs/immediate/go"
	"github.com/snapper-labs/immediate/go/web"
)

//go:embed bundle.js
var js string

func Initialize(ui *immgo.RenderNode, onInitialized func()) {
	web.Script(ui, fmt.Sprintf("data:text/javascript;base64,%s", base64.StdEncoding.EncodeToString([]byte(js))), web.ScriptOptions { Type: "module" })

	onInitialized()
}
