import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@vaadin/form-layout';

@customElement('itk-form-layout')
export class FormLayout extends LitElement {
  
  private responsiveSteps: any[] = [
    // Use one column by default
    { minWidth: 0, columns: 1 },
    // Use two columns, if layout's width exceeds 500px
    { minWidth: '500px', columns: 2 },
  ];

  render() {
    return html`
    <style>
      :host {
        display: block;
        max-width: 100%;
        align-self: stretch;
      }
    </style>
    <vaadin-form-layout .responsiveSteps="${this.responsiveSteps}">
      <slot></slot>
    </vaadin-form-layout>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "itk-form-layout": FormLayout
  }
}
