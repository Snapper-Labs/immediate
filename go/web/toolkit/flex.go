package toolkit

import (
	"github.com/apkumar/go-option"

	"github.com/snapper-labs/immediate/go"
)

// flex.go contains components related to managing flexbox.


type AlignItems int64
const (
	AlignItemsStretch AlignItems = iota
	AlignItemsFlexStart
	AlignItemsFlexEnd
	AlignItemsCenter
)

func (ai AlignItems) String() string {
	switch ai {
	case AlignItemsStretch:
		return "stretch"
	case AlignItemsFlexStart:
		return "flex-start"
	case AlignItemsFlexEnd:
		return "flex-end"
	case AlignItemsCenter:
		return "center"
	}

	return "unknown"
}


type JustifyContent int64
const (
	JustifyContentFlexStart JustifyContent = iota
	JustifyContentFlexEnd
	JustifyContentCenter
	JustifyContentSpaceAround
	JustifyContentSpaceBetween
	JustifyContentSpaceEvenly
)

func (jc JustifyContent) String() string {
	switch jc {
	case JustifyContentFlexStart:
		return "flex-start"
	case JustifyContentFlexEnd:
		return "flex-end"
	case JustifyContentCenter:
		return "center"
	case JustifyContentSpaceAround:
		return "space-around"
	case JustifyContentSpaceBetween:
		return "space-between"
	case JustifyContentSpaceEvenly:
		return "space-evenly"
	}

	return "unknown"
}

type FlexDirection int64
const (
	// Default is column, not row; different than in CSS.
	FlexDirectionColumn FlexDirection = iota
	FlexDirectionColumnReverse
	FlexDirectionRow
	FlexDirectionRowReverse
)

func (fd FlexDirection) String() string {
	switch fd {
	case FlexDirectionRow:
		return "row"
	case FlexDirectionRowReverse:
		return "row-reverse"
	case FlexDirectionColumn:
		return "column"
	case FlexDirectionColumnReverse:
		return "column-reverse"
	}

	return "unknown"
}

type FlexWrap int64
const (
	FlexWrapNoWrap FlexWrap = iota
	FlexWrapWrap
	FlexWrapWrapReverse
)

func (fw FlexWrap) String() string {
	switch fw {
	case FlexWrapNoWrap:
		return "nowrap"
	case FlexWrapWrap:
		return "wrap"
	case FlexWrapWrapReverse:
		return "wrap-reverse"
	}

	return "unknown"
}



type ContainerOptions struct {
	AlignItems AlignItems
	JustifyContent JustifyContent
	FlexDirection FlexDirection
	FlexWrap FlexWrap
	Key string
}

func Container(parent *immgo.RenderNode, options ...ContainerOptions) *immgo.RenderNode {
	opts := option.Merge(options...)

	desc := immgo.ElementDescription {
		Kind: "div",
		Key: opts.Key,
		Properties: immgo.Properties {
			Attributes: immgo.Attributes {
				"style": "display: flex; align-items: " + opts.AlignItems.String() + "; justify-content: " + opts.JustifyContent.String() + "; flex-direction: " + opts.FlexDirection.String() + "; flex-wrap: " + opts.FlexWrap.String() + "; gap: 50px; border-style: dashed;",
			},
		},
	}

	return immgo.Render(parent, desc)
}
