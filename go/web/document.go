package immgo_web

import (
	"net/url"
)

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

type GetURLParams struct {}

type GetURLResponse struct {
	URL string `json:"url"`
}

func (this *Document) GetURL() (*url.URL, error) {
	ch, err := Request[GetURLParams, GetURLResponse](this.peer, "getURL", GetURLParams {})

	resp := <- ch

	u, err := url.Parse(resp.URL)

	return u, err
}
