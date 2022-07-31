package immgo_web

import (
	"context"
	_ "embed"
	"log"
	"net/http"
	"text/template"

	"github.com/gorilla/websocket"

	immgo "github.com/snapper-labs/immediate/go"
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
	log.Println("Listening...")
	log.Fatal(http.ListenAndServe(addr, nil))
}

func serveIndex(w http.ResponseWriter, r *http.Request) {
	indexTemplate.Execute(w, jsScript)
}

var upgrader = websocket.Upgrader{} // use default options

func serveWs(w http.ResponseWriter, r *http.Request, app App) {
	log.Print("Got a ws conn...")
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
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
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/themes/light.css" />
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<script type="module" src="https://md-block.verou.me/md-block.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/shoelace.js"></script>
<script> 
{{.}}
</script>
</body>
</html>
`))
