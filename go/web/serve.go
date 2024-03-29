package web

import (
	"context"
	_ "embed"
	"net/http"
	"net/url"
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

func Handle(path string, app App) error {
	realServeWs := func(w http.ResponseWriter, r *http.Request) {
		serveWs(w, r, app)
	}

	http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
		indexTemplate.Execute(w, indexTemplateArgs{
			Script:     jsScript,
		})
	})
	p, err := url.JoinPath(path, "ws")
	if err != nil {
		return err
	}

	http.HandleFunc(p, realServeWs)

	return nil
}

func Serve(addr string) {
	log.Println("Listening on", addr, "...")
	log.Fatal(http.ListenAndServe(addr, nil))
}

func Mount(addr string, app App) {
	Handle("/", app)
	Serve(addr)
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

	transport := NewWebsocketTransport(c)
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
