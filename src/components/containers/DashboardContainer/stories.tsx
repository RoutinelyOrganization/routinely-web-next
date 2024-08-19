import { TaskProvider } from '@/providers/taskProvider';
import { tasks as tasksMock } from '@mocks/taskMock';
import { SessionProvider } from 'next-auth/react';
import type { IDashboardContainer } from '.';
import DashboardContainer from '.';

export default {
  title: 'containers/DashboardContainer',
  component: DashboardContainer,
  args: {
    tasks: tasksMock,
  },
  argTypes: {
    tasks: { type: 'array' },
  },
};

export const Template = (args: IDashboardContainer) => {
  return (
    <SessionProvider
      session={{
        user: {
          token: 'token',
          refreshToken: '',
        },
        expires: '',
      }}
    >
      <TaskProvider>
        <DashboardContainer {...args} />
      </TaskProvider>
    </SessionProvider>
  );
};
