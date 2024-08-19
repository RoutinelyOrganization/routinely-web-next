import ButtonSecondary from '../ButtonSecondary';

export default {
  title: 'buttons/ButtonSecondary',
  component: ButtonSecondary,
};

export const Template = () => (
  <div>
    <ButtonSecondary>ButtonSecondary</ButtonSecondary>
  </div>
);

Template.parameters = {
  backgrounds: { default: 'white' },
};
