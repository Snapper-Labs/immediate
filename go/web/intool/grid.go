package intool

import (
	"github.com/apkumar/go-option"

	"github.com/snapper-labs/immediate/go"
	web "github.com/snapper-labs/immediate/go/web"
)

type RowOptions struct {
       Style web.Style
       Key string
}

func Row(parent *immgo.RenderNode, options ...RowOptions) *immgo.RenderNode {
       opts := option.Merge(options...)

       style := opts.Style
       style.Display = option.Some("flex")
       style.FlexDirection = option.Some("row")

	   divOpts := web.DivOptions { Style: style, Key: opts.Key }
       return web.Div(parent, divOpts)
}

type ColOptions struct {
       Style web.Style
       Key string
}

func Col(parent *immgo.RenderNode, options ...ColOptions) *immgo.RenderNode {
       opts := option.Merge(options...)

       style := opts.Style
       style.Display = option.Some("flex")
       style.FlexDirection = option.Some("column")

	   divOpts := web.DivOptions { Style: style, Key: opts.Key }
       return web.Div(parent, divOpts)
}
