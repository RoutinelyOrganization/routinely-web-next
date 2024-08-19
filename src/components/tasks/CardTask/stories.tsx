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
      <CardTask {...args} />
    </div>
  );
};

export const TemplateHabit = (args: ICardTask) => {
  return (
    <div>
      <CardTask {...args} />
    </div>
  );
};

TemplateHabit.args = {
  task: tasks[1],
};
