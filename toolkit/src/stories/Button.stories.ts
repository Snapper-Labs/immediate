import { Story, Meta } from '@storybook/web-components';
import { Button, ButtonProps } from './Button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Toolkit/Button',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<Partial<ButtonProps>> = (args) => Button(args);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  label: 'Button',
};
