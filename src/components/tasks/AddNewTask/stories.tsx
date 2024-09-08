import { GlobalStyles } from '@/styles/globalStyles';
import AddNewTask from '.';

export default {
  title: 'tasks/AddNewTask',
  component: AddNewTask,
  args: {},
  argTypes: {},
};

export const Template = () => {
  return (
    <div>
      <GlobalStyles />
      <AddNewTask />
    </div>
  );
};
