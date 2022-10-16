import { html } from 'lit-html';
import './button.css';
import '../Button';

export interface ButtonProps {
  label: string;
}

export const Button = ({label}: ButtonProps) => {
  return html`
    <itk-button label="${label}">
    </itk-button>
  `;
};
