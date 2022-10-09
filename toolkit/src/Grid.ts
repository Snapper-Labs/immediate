import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-column.js';
import '@vaadin/grid/vaadin-grid-column-group.js';
import '@vaadin/grid/vaadin-grid-filter-column.js';
import '@vaadin/grid/vaadin-grid-selection-column.js';
import '@vaadin/grid/vaadin-grid-sort-column.js';
import '@vaadin/grid/vaadin-grid-tree-column.js';

@customElement('itk-grid')
export class Grid extends LitElement {
  @property()
  itemsJson: string = '';

  render() {
    const items = JSON.parse(this.itemsJson)
    return html`
    <vaadin-grid .items="${items}">
      <vaadin-grid-column path="SHA"></vaadin-grid-column>
      <vaadin-grid-column path="PR"></vaadin-grid-column>
      <vaadin-grid-column path="Description"></vaadin-grid-column>
    </vaadin-grid>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "itk-grid": Grid
  }
}
