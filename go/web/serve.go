package immgo_web

import (
	"context"
	_ "embed"
	"net/http"
	"text/template"

	log "github.com/sirupsen/logrus"
	"github.com/gorilla/websocket"

	"github.com/snapper-labs/immediate/go"
)

//go:embed main.js
var jsScript string

type App interface {
	Render(root *immgo.RenderNode, doc *Document)
}

func Serve(addr string, app App) {
	realServeWs := func(w http.ResponseWriter, r *http.Request) {
		serveWs(w, r, app)
	}

	http.HandleFunc("/", serveIndex)
	http.HandleFunc("/ws", realServeWs)
	log.Info("Listening...")
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

	transport := WebsocketTransport {conn: c}
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
{{.}}
</script>
</body>
</html>
`))
