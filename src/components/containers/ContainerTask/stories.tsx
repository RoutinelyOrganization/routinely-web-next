import { tasks } from '@mocks/taskMock';
import type { IContainerTask } from '.';
import ContainerTask from '.';

export default {
  title: 'constainers/ContainerTask',
  component: ContainerTask,
  args: {
    tasks: tasks,
  },
  argTypes: {
    tasks: { type: 'array' },
  },
};

export const Template = (args: IContainerTask) => {
  return (
    <div>
      <ContainerTask {...args} />
    </div>
  );
};
