import ForgotPassword from '.';

export default {
  title: 'ForgotPassword',
  component: ForgotPassword,
};

export const Template = () => {
  return (
    <div>
      <ForgotPassword />
    </div>
  );
};

Template.parameters = {
  backgrounds: {
    default: 'white',
  },
};
