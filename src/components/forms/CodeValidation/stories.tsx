import CodeValidateForm from '.';

export default {
  title: 'forms/CodeValidateForm',
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
