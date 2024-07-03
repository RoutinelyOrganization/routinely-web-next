import ButtonSocialGoogle from '../ButtonSocialGoogle';

export default {
  title: 'ButtonSocialGoogle',
  component: ButtonSocialGoogle,
};

export const Template = () => (
  <div>
    <ButtonSocialGoogle>ButtonSocialGoogle</ButtonSocialGoogle>
  </div>
);

Template.parameters = {
  backgrounds: { default: 'white' },
};
