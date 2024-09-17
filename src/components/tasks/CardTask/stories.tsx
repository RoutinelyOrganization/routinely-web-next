import { GlobalStyles } from '@/styles/globalStyles';
import type { Task } from '@/types/task';
import { tasks } from '@mocks/taskMock';
import type { ICardTask } from '.';
import CardTask from '.';

export default {
  title: 'tasks/CardTask',
  component: CardTask,
  args: {
    task: tasks[0],
  },
  argTypes: {
    task: { type: 'object' },
  },
};

export const TemplateTask = (args: ICardTask) => {
  return (
    <div>
      <GlobalStyles />
      <CardTask {...args} />
    </div>
  );
};

export const TemplateHabit = (args: ICardTask) => {
  return (
    <div>
      <GlobalStyles />
      <CardTask {...args} />
    </div>
  );
};

export const TemplateHabitCompleted = (args: ICardTask) => {
  return (
    <div>
      <GlobalStyles />
      <CardTask {...args} />
    </div>
  );
};

TemplateHabit.args = {
  task: tasks[1],
};

TemplateHabitCompleted.args = {
  task: { ...tasks[1], checked: true } as Task,
};
