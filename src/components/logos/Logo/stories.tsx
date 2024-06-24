import Logo from '.';

export default {
  title: 'Logo',
  component: Logo,
};

export const Template = () => {
  return <Logo />;
};

Template.parameters = {
  backgrounds: { default: 'primary' },
};
