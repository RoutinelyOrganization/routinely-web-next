import type { IButton } from '.';
import ButtonDanger from '.';

export default {
  title: 'ButtonDanger',

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: IButton) => {
  return <ButtonDanger {...args}>Testando</ButtonDanger>;
};
