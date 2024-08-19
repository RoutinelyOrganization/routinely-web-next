import LogoShared from '.';

export default {
  title: 'logos/LogoShared',
  component: LogoShared,
};

export const Template = () => {
  return <LogoShared />;
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
