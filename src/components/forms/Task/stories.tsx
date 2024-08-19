import TaskForm from '.';

export default {
  title: 'forms/TaskForm',
  component: TaskForm,
};

export const Template = () => {
  return (
    <div>
      <TaskForm />
    </div>
  );
};

Template.parameters = {
  backgrounds: {
    default: 'white',
  },
};
