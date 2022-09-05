import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import showdown from 'showdown';

@customElement('itk-markdown')
export class Markdown extends LitElement {
  @property()
  markdown: string = '# Test';

  render() {
    const rawHtml = new showdown.Converter().makeHtml(this.markdown);
    console.log(`rawHtml is: ${rawHtml}`);

    return html`${unsafeHTML(rawHtml)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "itk-markdown": Markdown
  }
}
