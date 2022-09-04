import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import showdown from 'showdown';

@customElement('itk-markdown')
export class Markdown extends LitElement {

  // Declare reactive properties
  @property()
  markdown: string = '# Test';

  // Render the UI as a function of component state
  render() {
    const rawHtml = new showdown.Converter().makeHtml(this.markdown);

    return html`${unsafeHTML(rawHtml)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "itk-markdown": Markdown
  }
}
