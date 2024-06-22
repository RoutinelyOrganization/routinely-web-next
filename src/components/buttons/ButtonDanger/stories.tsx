import type { IButton } from '.';
import ButtonDanger from '.';

export default {
  title: 'ButtonDanger',
  component: ButtonDanger,
  args: {
    children: 'Storybook',
  },

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: IButton) => {
  return <ButtonDanger {...args} />;
};
