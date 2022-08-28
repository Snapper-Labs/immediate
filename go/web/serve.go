package immgo_web

import (
	"context"
	_ "embed"
	"fmt"
	"net/http"
	"text/template"

	"github.com/gorilla/websocket"
	log "github.com/sirupsen/logrus"

	immgo "github.com/snapper-labs/immediate/go"
)

//go:embed main.js
var jsScript string

type App interface {
	Render(root *immgo.RenderNode, doc *Document)
}


type indexTemplateArgs struct {
	Script     string
}

func Handle(path string, app App) {
	realServeWs := func(w http.ResponseWriter, r *http.Request) {
		serveWs(w, r, app)
	}

	http.HandleFunc(fmt.Sprintf("/%s/", path), func(w http.ResponseWriter, r *http.Request) {
		indexTemplate.Execute(w, indexTemplateArgs{
			Script:     jsScript,
		})
	})
	http.HandleFunc(fmt.Sprintf("/%s/ws", path), realServeWs)
}

func Serve(addr string) {
	log.Println("Listening...")
	log.Fatal(http.ListenAndServe(addr, nil))
}

func serveIndex(w http.ResponseWriter, r *http.Request) {
	indexTemplate.Execute(w, jsScript)
}

var upgrader = websocket.Upgrader{} // use default options

func serveWs(w http.ResponseWriter, r *http.Request, app App) {
	log.Debug("Got a websocket connection.")
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Debug("Error upgrading websocket connection; ignoring:", err)
		return
	}

	transport := WebsocketTransport{conn: c}
	peer := NewPeer(transport)
	doc := NewDocument(peer)
	hostTree := NewDocumentHostTree(peer)

	renderFunc := func(root *immgo.RenderNode) {
		app.Render(root, doc)
	}

	ctx, cancel := context.WithCancel(context.Background())
	go immgo.Run(ctx, hostTree, renderFunc)

	peer.ServeLoop()
	cancel()
}

var indexTemplate = template.Must(template.New("").Parse(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<script> 
{{.Script}}
</script>
</body>
</html>
`))
