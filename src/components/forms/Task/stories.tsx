import { useTask } from '@/hooks/useTask';
import { TaskProvider } from '@/providers/taskProvider';
import { tasks } from '@mocks/taskMock';
import type { Meta } from '@storybook/react';
import TaskForm from '.';

export default {
  title: 'forms/TaskForm',
  component: TaskForm,
  decorators: [
    Story => (
      <TaskProvider>
        <Story />
      </TaskProvider>
    ),
  ],
} as Meta;

export const TemplateAddTask = () => {
  return (
    <div>
      <TaskForm />
    </div>
  );
};

export const TemplateUpdateTask = () => {
  const { setSelectedTask } = useTask();
  setSelectedTask(tasks[0]);
  return <TaskForm />;
};
