import CreateNewPasswordForm from '.';

export default {
  title: 'forms/CreateNewPasswordForm',
  component: CreateNewPasswordForm,
};

export const Template = () => {
  return (
    <div>
      <CreateNewPasswordForm />
    </div>
  );
};

Template.parameters = {
  backgrounds: {
    default: 'white',
  },
};
