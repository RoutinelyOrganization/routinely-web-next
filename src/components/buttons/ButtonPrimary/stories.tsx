import ButtonPrimary from '../ButtonPrimary';

export default {
  title: 'ButtonPrimary',
  component: ButtonPrimary,
};

export const Template = () => (
  <div>
    <ButtonPrimary>ButtonPrimary</ButtonPrimary>
  </div>
);

Template.parameters = {
  backgrounds: { default: 'white' },
};
