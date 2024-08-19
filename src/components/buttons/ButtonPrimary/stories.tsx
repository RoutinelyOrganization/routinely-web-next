import ButtonPrimary from '../ButtonPrimary';

export default {
  title: 'buttons/ButtonPrimary',
  component: ButtonPrimary,
};

export const TemplateButton = () => (
  <div>
    <ButtonPrimary>ButtonPrimary</ButtonPrimary>
  </div>
);

export const TemplateLink = () => (
  <div>
    <ButtonPrimary href="/home">ButtonPrimary</ButtonPrimary>
  </div>
);
