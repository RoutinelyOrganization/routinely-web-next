import type { IButtonBackPage } from '.';
import ButtonBackPage from '.';

export default {
  title: 'buttons/ButtonBackPage',

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: IButtonBackPage) => {
  return <ButtonBackPage {...args} />;
};
