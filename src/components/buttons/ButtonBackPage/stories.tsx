import type { IButtonBackPage } from '.';
import ButtonBackPage from '.';

export default {
  title: 'ButtonBackPage',

  argTypes: {
    children: { type: 'string' },
  },

  parameters: {
    backgrounds: {
      values: [
        {
          name: 'primary',
          value: '#000',
        },
      ],
    },
  },
};

export const Template = (args: IButtonBackPage) => {
  return <ButtonBackPage {...args} />;
};
