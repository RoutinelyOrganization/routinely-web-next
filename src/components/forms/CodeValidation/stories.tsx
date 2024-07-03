import CodeValidateForm from '.';

export default {
  title: 'CodeValidateForm',
  component: CodeValidateForm,
};

export const Template = () => {
  return (
    <div>
      <CodeValidateForm />
    </div>
  );
};

Template.parameters = {
  backgrounds: {
    default: 'white',
  },
};
