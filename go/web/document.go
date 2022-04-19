package immgo_web

type Document struct {
	peer *Peer
}

func NewDocument(peer *Peer) *Document {
	return &Document {
		peer: peer,
	}
}

type AlertParams struct {
	Message string `json:"message"`
}

type AlertResponse struct {}

func (this *Document) Alert(message string) error {
	ch, err := Request[AlertParams, AlertResponse](this.peer, "alert", AlertParams{
		Message: message,
	})
	<- ch
	return err
}
