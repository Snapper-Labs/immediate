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
  gridOptsJson: string = '';

  render() {
    console.log("json:");
    console.dir(this.gridOptsJson);

    const gridOpts = JSON.parse(this.gridOptsJson);
    const cols = (gridOpts.Columns as string[]);
    const items = gridOpts.Rows.map((row: string[]) => {
      const rowMap: { [path: string]: string } = {}
      row.forEach((cellValue: string, i: number) => {
        const col = cols[i];
        rowMap[col] = cellValue;
      })
      return rowMap;
    })

    console.log("items:");
    console.dir(items);

    return html`
    <vaadin-grid .items="${items}">
      ${cols.map(col => html`<vaadin-grid-column path="${col}"></vaadin-grid-column>`)}
    </vaadin-grid>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "itk-grid": Grid
  }
}
