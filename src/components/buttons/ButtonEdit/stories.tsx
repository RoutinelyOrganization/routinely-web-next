import ButtonEdit from '../ButtonEdit';

export default {
  title: 'ButtonEdit',
  component: ButtonEdit,
};

export const Template = () => (
  <div>
    <ButtonEdit />
  </div>
);

Template.parameters = {
  backgrounds: {
    default: 'white',
  },
};
