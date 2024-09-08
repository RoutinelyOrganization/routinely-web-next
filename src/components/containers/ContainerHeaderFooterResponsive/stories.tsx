import { TaskProvider } from '@/providers/taskProvider';
import { GlobalStyles } from '@/styles/globalStyles';
import { SessionProvider } from 'next-auth/react';
import ContainerHeaderFooterMobile from '.';

export default {
  title: 'containers/ContainerHeaderFooterMobile',
  component: ContainerHeaderFooterMobile,
  args: {},
  argTypes: {},
};

export const TemplateWithSession = () => {
  return (
    <SessionProvider session={{ user: { token: 'token', refreshToken: '' }, expires: '' }}>
      <TaskProvider>
        <ContainerHeaderFooterMobile>
          <h1>Storybook</h1>
        </ContainerHeaderFooterMobile>
      </TaskProvider>
    </SessionProvider>
  );
};

export const TemplateWithoutSession = () => {
  return (
    <SessionProvider>
      <TaskProvider>
        <GlobalStyles />
        <ContainerHeaderFooterMobile>
          <h1>Storybook</h1>
        </ContainerHeaderFooterMobile>
      </TaskProvider>
    </SessionProvider>
  );
};
