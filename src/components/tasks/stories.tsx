import SessionProvider from '@/providers/sessionProvider';
import { TaskProvider } from '@/providers/taskProvider';
import { tasks as tasksMock } from '@mocks/taskMock';
import Tasks from '.';

export default {
  title: 'Tasks/Tasks',
  component: Tasks,
  args: {
    tasks: tasksMock,
  },
  argTypes: {
    tasks: { type: 'array' },
  },
};

export const Template = () => {
  return (
    <SessionProvider>
      <TaskProvider>
        <Tasks />
      </TaskProvider>
    </SessionProvider>
  );
};
