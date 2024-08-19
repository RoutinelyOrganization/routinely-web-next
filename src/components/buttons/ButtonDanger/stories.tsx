import type { IButton } from '.';
import ButtonDanger from '.';

export default {
  title: 'buttons/ButtonDanger',

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: IButton) => {
  return <ButtonDanger {...args}>Testando</ButtonDanger>;
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
