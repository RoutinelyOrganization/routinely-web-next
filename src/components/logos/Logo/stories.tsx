import Logo from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    children: 'Storybook',
  },
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

export const Template = (args: ArgTypes) => {
  return <Logo {...args} />;
};
