package immgo_web

import (
	"fmt"
	"strings"

	"github.com/apkumar/gox/option"
)

type Style struct {
	// todo: this could be an int or float but how to handle % vs px etc
	Height option.Option[string]
	Width option.Option[string]
	Top option.Option[int]
	Left option.Option[int]
	Right option.Option[int]
	BackgroundColor option.Option[string]

	// TODO: enums?
	Position option.Option[string]
	Display option.Option[string]
	FlexDirection option.Option[string]
}

func (this *Style) String() string {
	attrs := []string{}
	addStyleAttribute := func(key, val string) {
		attrs = append(attrs, fmt.Sprintf("%s:%s", key, val))
	}

	if val, exists := this.Height.Get(); exists {
		addStyleAttribute("height", val)
	}

	if val, exists := this.Width.Get(); exists {
		addStyleAttribute("width", val)
	}

	if val, exists := this.Top.Get(); exists {
		addStyleAttribute("top", fmt.Sprint(val))
	}

	if val, exists := this.Left.Get(); exists {
		addStyleAttribute("left", fmt.Sprint(val))
	}

	if val, exists := this.Right.Get(); exists {
		addStyleAttribute("right", fmt.Sprint(val))
	}



	if val, exists := this.BackgroundColor.Get(); exists {
		addStyleAttribute("background-color", val)
	}

	if val, exists := this.Position.Get(); exists {
		addStyleAttribute("position", val)
	}

	if val, exists := this.Display.Get(); exists {
		addStyleAttribute("display", val)
	}

	if val, exists := this.FlexDirection.Get(); exists {
		addStyleAttribute("flex-direction", val)
	}


	return strings.Join(attrs, ";")
}
