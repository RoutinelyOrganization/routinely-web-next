import SingUpForm from '.';

export default {
  title: 'forms/SingUpForm',
  component: SingUpForm,
};

export const Template = () => {
  return (
    <div>
      <SingUpForm />
    </div>
  );
};

Template.parameters = {
  backgrounds: {
    default: 'white',
  },
};
