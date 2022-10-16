import { Story, Meta } from '@storybook/web-components';
import { FormLayout, FormLayoutProps } from './FormLayout';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Toolkit/FormLayout',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<Partial<FormLayoutProps>> = (args) => FormLayout(args);

export const Basic = Template.bind({});
Basic.args = {
  type: "itk"
};

export const Vaadin = Template.bind({});
Vaadin.args = {
  type: "vaadin"
};
