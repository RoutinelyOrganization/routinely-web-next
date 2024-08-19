import AddNewTask from '.';

export default {
  title: 'tasks/AddNewTask',
  component: AddNewTask,
  args: {},
  argTypes: {},
};

export const Template = () => {
  return (
    <div style={{ marginLeft: '100px' }}>
      <AddNewTask />
    </div>
  );
};
