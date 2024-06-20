import type { IButtonBackPage } from '.';
import ButtonBackPage from '.';

export default {
  title: 'ButtonBackPage',

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: IButtonBackPage) => {
  return <ButtonBackPage {...args} />;
};
