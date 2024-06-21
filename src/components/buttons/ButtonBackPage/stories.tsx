import ButtonBackPage, { IButtonBackPage } from '.';

export default {
  title: 'ButtonBackPage',

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: IButtonBackPage) => {
  return <ButtonBackPage {...args} />;
};

Template.parameters = {
  backgrounds: { default: 'primary' },
};
