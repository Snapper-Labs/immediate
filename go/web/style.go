package immgo_web

import (
	"fmt"
	"strings"

	"github.com/apkumar/gox/option"
)

type Style struct {
	// TODO: enums?
	Display option.Option[string]
	FlexDirection option.Option[string]
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


	return strings.Join(attrs, ";")
}
