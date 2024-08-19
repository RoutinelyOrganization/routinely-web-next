import LoginForm from '.';

export default {
  title: 'forms/LoginForm',
  component: LoginForm,
};

export const Template = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

Template.parameters = {
  backgrounds: {
    default: 'white',
  },
};
