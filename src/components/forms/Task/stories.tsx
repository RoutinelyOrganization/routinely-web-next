import { useTask } from '@/hooks/useTask';
import { TaskProvider } from '@/providers/taskProvider';
import { GlobalStyles } from '@/styles/globalStyles';
import { tasks } from '@mocks/taskMock';
import type { Meta } from '@storybook/react';
import { useEffect } from 'react';
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
  const { setSelectedTypeTask, setActionForm } = useTask();
  useEffect(() => {
    setActionForm({ action: null, openConfirm: false });
    setSelectedTypeTask(tasks[0].type);
  }, [setActionForm, setSelectedTypeTask]);

  return (
    <div>
      <TaskForm />
    </div>
  );
};

export const TemplateUpdateTask = () => {
  const { setSelectedTask, setSelectedTypeTask, setActionForm } = useTask();
  useEffect(() => {
    setActionForm({ action: 'update', openConfirm: false });
    setSelectedTypeTask(tasks[1].type);
    setSelectedTask(tasks[0]);
  }, [setActionForm, setSelectedTask, setSelectedTypeTask]);

  return <TaskForm />;
};
