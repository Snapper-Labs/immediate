package immgo_web

import (
	_ "embed"
	"time"
	"log"
	"net/http"
	"text/template"

	"github.com/gorilla/websocket"

	"github.com/apkumar/immediate/go"
)

//go:embed main.js
var jsScript string

type App interface {
	Render(ui *immgo.Renderer, doc *Document)
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

	transport := WebsocketTransport {conn: c}
	peer := NewPeer(transport)
	doc := NewDocument(peer)
	hostTree := NewDocumentHostTree(peer)

	hostTree.BeginFrame()
	hostRoot, _ := hostTree.CreateNode("root")
	hostTree.InsertChildAt(immgo.HostNode(-1), hostRoot, 0)
	hostTree.EndFrame()
	shadowRoot := immgo.NewShadowNode("root", "root", immgo.Properties{})

	renderFunc := func(ui *immgo.Renderer) {
		app.Render(ui, doc)
	}

	doneCh := make(chan struct{})
	go func() {
		for {
			select {
			case <-doneCh:
				log.Println("Done serving ws.")
				return
			default:
				err := immgo.Update(hostTree, hostRoot, shadowRoot, renderFunc)
				if err != nil {
					log.Println("Error updating: ", err)
				}

				time.Sleep(33 * time.Millisecond)
			}
		}
	}()

	peer.ServeLoop()
	doneCh <- struct{}{}
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
