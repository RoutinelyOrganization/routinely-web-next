import { TaskProvider } from '@/providers/taskProvider';
import { tasks as tasksMock } from '@mocks/taskMock';
import type { ITask } from '.';
import Tasks from '.';

export default {
  title: 'Tasks',
  component: Tasks,
  args: {
    tasks: tasksMock,
  },
  argTypes: {
    tasks: { type: 'array' },
  },
};

export const Template = (args: ITask) => {
  return (
    <div>
      <TaskProvider>
        <Tasks {...args} />
      </TaskProvider>
    </div>
  );
};
