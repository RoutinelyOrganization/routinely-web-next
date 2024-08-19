import { TaskProvider } from '@/providers/taskProvider';
import { tasks } from '@mocks/taskMock';
import { SessionProvider } from 'next-auth/react';
import ContainerHeaderFooterMobile from '.';
import DashboardContainer from '../DashboardContainer';

export default {
  title: 'containers/ContainerHeaderFooterMobile',
  component: ContainerHeaderFooterMobile,
  args: {},
  argTypes: {},
};

export const TemplateWithSession = () => {
  return (
    <SessionProvider session={{ user: { token: 'token', refreshToken: '' }, expires: '' }}>
      <ContainerHeaderFooterMobile>
        <TaskProvider>
          <DashboardContainer tasks={tasks} />
        </TaskProvider>
      </ContainerHeaderFooterMobile>
    </SessionProvider>
  );
};

export const TemplateWithoutSession = () => {
  return (
    <SessionProvider>
      <ContainerHeaderFooterMobile>
        <TaskProvider>
          <DashboardContainer tasks={tasks} />
        </TaskProvider>
      </ContainerHeaderFooterMobile>
    </SessionProvider>
  );
};
