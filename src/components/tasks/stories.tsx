import Task from '.';
import { tasks } from '@mocks/taskMock';

export default {
  title: 'Task',
  component: Task,
  argTypes: {
    tasks: { control: 'object' }, // Permite que o Storybook controle a prop `tasks`
  },
};

const mockTasks = tasks;

export const Template = () => {
  return <Task tasks={mockTasks} />;
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
