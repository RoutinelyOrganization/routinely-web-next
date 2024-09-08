import { useTask } from '@/hooks/useTask';
import { TaskProvider } from '@/providers/taskProvider';
import { GlobalStyles } from '@/styles/globalStyles';
import { tasks } from '@mocks/taskMock';
import type { Meta } from '@storybook/react';
import TaskForm from '.';

export default {
  title: 'forms/TaskForm',
  component: TaskForm,
  decorators: [
    Story => (
      <TaskProvider>
        <GlobalStyles />
        <Story />
      </TaskProvider>
    ),
  ],
} as Meta;

export const TemplateAddTask = () => {
  const { setSelectedTypeTask } = useTask();
  setSelectedTypeTask(tasks[0].type);

  return (
    <div>
      <TaskForm />
    </div>
  );
};

export const TemplateUpdateTask = () => {
  const { setSelectedTask, setSelectedTypeTask } = useTask();
  setSelectedTask(tasks[0]);
  setSelectedTypeTask(tasks[0].type);
  return <TaskForm />;
};
