import LogoShared from '.';

export default {
  title: 'LogoShared',
  component: LogoShared,
};

export const Template = () => {
  return <LogoShared />;
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
