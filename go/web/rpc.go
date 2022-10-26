package web

import (
	"encoding/json"
	"errors"
	"sync"

	log "github.com/sirupsen/logrus"
	"github.com/gorilla/websocket"
)

type Transport interface {
	Read() ([]byte, error)
	Write(data []byte) error
	Close() error
}

type RequestMessage struct {
	Id *int `json:"id"`
	Method string `json:"method"`
	Params json.RawMessage `json:"params"`
}

type ResponseMessage struct {
	Id *int `json:"id"`
	Result json.RawMessage `json:"result"`
	Error json.RawMessage `json:"error"`
}

type RequestHandler func(json.RawMessage)(json.RawMessage, error)

func Wrap[A, R any](handler func(A)R) RequestHandler {
	realHandler := func(a json.RawMessage)(json.RawMessage, error) {
		var args A
		err := json.Unmarshal(a, &args)
		if err != nil {
			return nil, err
		}

		ret := handler(args)
		return json.Marshal(ret)
	}
	
	return realHandler
}

func Transform[I, O any](inCh chan I, f func(I)(O, error)) chan O {
	o := make(chan O)
	go func() {
		for val := range inCh {
			out, err := f(val)
			if err != nil {
				continue
			}

			o <- out
		}
	}()

	return o
}

func Request[A, R any](peer *Peer, method string, args A) (chan R, error) {
	rawMessage, err := json.Marshal(args)
	if err != nil {
		return nil, err
	}

	jsonChan, err := peer.Request(method, rawMessage)
	if err != nil {
		return nil, err
	}

	return Transform(jsonChan, func(raw json.RawMessage)(R, error) {
		var r R
		err := json.Unmarshal(raw, &r)
		return r, err
	}), nil
}

func Notify[A any](peer *Peer, method string, args A) error {
	rawMessage, err := json.Marshal(args)
	if err != nil {
		return err
	}

	return peer.Notify(method, rawMessage)
}

type Peer struct {
	transport Transport
	handlers map[string]RequestHandler
	pendingLock sync.Mutex
	pending map[int]chan json.RawMessage
	nextId int
}

func NewPeer(transport Transport) *Peer {
	return &Peer {
		transport: transport,
		handlers: make(map[string]RequestHandler),
		pending: make(map[int]chan json.RawMessage),
		nextId: 0,
	}
}

func (this *Peer) SetMethodHandler(method string, handler RequestHandler) {
	this.handlers[method] = handler
}

// You probably don't want this, preferring the standalone Request[A,R].
func (this *Peer) Request(method string, args json.RawMessage) (chan json.RawMessage, error) {
	id := this.nextId
	this.nextId += 1

	request := RequestMessage {
		Id: &id,
		Method: method,
		Params: args,
	}

	b, err := json.Marshal(request)
	if err != nil {
		return nil, err
	}

	err = this.transport.Write(b)
	if err != nil {
		return nil, err
	}

	retchan := make(chan json.RawMessage)
	this.pendingLock.Lock()
	defer this.pendingLock.Unlock()
	this.pending[id] = retchan

	return retchan, nil
}

// You probably don't want this, preferring the standalone Notify[A,R].
func (this *Peer) Notify(method string, args json.RawMessage) error {
	request := RequestMessage {
		Id: nil,
		Method: method,
		Params: args,
	}

	b, err := json.Marshal(request)
	if err != nil {
		return err
	}

	err = this.transport.Write(b)
	if err != nil {
		return err
	}

	return nil
}

func (this *Peer) ServeLoop() {
	for {
		err := this.Serve()
		if err != nil {
			log.Debug("Error serving: ", err)
			return
		}
	}
}

func (this *Peer) Serve() error {
	raw, err := this.transport.Read()
	if err != nil {
		return err
	}

	var kv map[string]interface{}
	err = json.Unmarshal(raw, &kv)
	if err != nil {
		return err
	}

	_, exists := kv["method"]
	if exists {
		// call
		var request RequestMessage
		err := json.Unmarshal(raw, &request)
		if err != nil {
			return err
		}

		handler, exists := this.handlers[request.Method]
		response := ResponseMessage {
			Id: request.Id,
			Result: nil,
			Error: nil,
		}

		if !exists {
			response.Error = json.RawMessage("No handler.")
		} else {
			result, err := handler(request.Params)
			if err != nil {
				response.Error = json.RawMessage("Error processing")
			} else {
				response.Result = result
			}
		}

		if response.Id != nil {
			b, err := json.Marshal(response)
			if err != nil {
				return err
			}
			 err = this.transport.Write(b)
			if err != nil {
				return err
			}
		}
	} else {
		// response
		var response ResponseMessage
		err := json.Unmarshal(raw, &response)
		if err != nil {
			return err
		}

		this.pendingLock.Lock()
		defer this.pendingLock.Unlock()
		pending, exists := this.pending[*response.Id]
		if !exists {
			return errors.New("No pending channel")
		} else {
			pending <- response.Result
		}
	}

	return nil
}

type WebsocketTransport struct {
	conn *websocket.Conn
	writeCh chan []byte
}

func NewWebsocketTransport(conn *websocket.Conn) *WebsocketTransport {
	wst := &WebsocketTransport{conn: conn, writeCh: make(chan []byte)}
	wst.Start()

	return wst
}

func (this *WebsocketTransport) Read() ([]byte, error) {
	_, msg, err := this.conn.ReadMessage()
	return msg, err
}

func (this *WebsocketTransport) Write(data []byte) error {
	log.Trace(string(data))
	this.writeCh <- data
	return nil
}

func (this *WebsocketTransport) Close() error {
	return this.conn.Close()
}

func (this *WebsocketTransport) Start() {
	go func() {
		for data := range this.writeCh {
			this.conn.WriteMessage(websocket.TextMessage, data)
		}
	}()
}
