package immgo_web

import (
	"fmt"
	"strings"

	"github.com/apkumar/gox/option"
)

type Style struct {
	// TODO: enums?
	Display        option.Option[string]
	FlexDirection  option.Option[string]
	JustifyContent option.Option[string]
	MaxWidth       option.Option[string]
	MinWidth       option.Option[string]
	Width          option.Option[string]
}

func (this *Style) String() string {
	attrs := []string{}
	addStyleAttribute := func(key, val string) {
		attrs = append(attrs, fmt.Sprintf("%s:%s", key, val))
	}

	if val, exists := this.Display.Get(); exists {
		addStyleAttribute("display", val)
	}

	if val, exists := this.FlexDirection.Get(); exists {
		addStyleAttribute("flex-direction", val)
	}

	if val, exists := this.JustifyContent.Get(); exists {
		addStyleAttribute("justify-content", val)
	}

	if val, exists := this.MaxWidth.Get(); exists {
		addStyleAttribute("max-width", val)
	}

	if val, exists := this.MinWidth.Get(); exists {
		addStyleAttribute("min-width", val)
	}

	if val, exists := this.Width.Get(); exists {
		addStyleAttribute("width", val)
	}

	return strings.Join(attrs, ";")
}
