import CreateNewPasswordForm from '.';

export default {
  title: 'CreateNewPasswordForm',
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
