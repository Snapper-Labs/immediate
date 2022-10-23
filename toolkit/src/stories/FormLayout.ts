import { html } from 'lit-html';
import './button.css';
import '../FormLayout';
import '@vaadin/text-field'
import '@vaadin/form-layout'

export interface FormLayoutProps {
  type: string;
  label: string;
}

export const FormLayout = ({type}: FormLayoutProps) => {
  if (type == "itk") {
    return html`
      <itk-form-layout style="display:block">
        <vaadin-text-field style="width: calc(99.9% - 0rem); margin-left: 0px; margin-right: 0px;" label="foo">gsdgddf</vaadin-text-field>
        <vaadin-text-field style="width: calc(99.9% - 0rem); margin-left: 0px; margin-right: 0px;" label="foo">gsdgddf</vaadin-text-field>
      </itk-form-layout>
    `;
  } else if (type == "vaadin") {
    return html`
      <vaadin-form-layout>
        <vaadin-text-field label="foo">gsdgddf</vaadin-text-field>
        <vaadin-text-field label="foo">gsdgddf</vaadin-text-field>
      </vaadin-form-layout>
    `;
  }
};
