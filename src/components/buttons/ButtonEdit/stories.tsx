import ButtonEdit from '../ButtonEdit';

export default {
  title: 'buttons/ButtonEdit',
  component: ButtonEdit,
};

export const Template = () => (
  <div>
    <ButtonEdit />
  </div>
);

Template.parameters = {
  backgrounds: { default: 'white' },
};
