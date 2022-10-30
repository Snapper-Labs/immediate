import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('itk-button')
export class Button extends LitElement {
  @property()
  label: string = '';

  render() {
    return html`<vaadin-button @click=${this._onClick}>${this.label}</button>`
  }

  private _onClick(e: any /* TODO */) {
    this.dispatchEvent(e);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "itk-button": Button
  }
}
