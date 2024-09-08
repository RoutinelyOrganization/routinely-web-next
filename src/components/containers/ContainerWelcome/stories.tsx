import { GlobalStyles } from '@/styles/globalStyles';
import { SessionProvider } from 'next-auth/react';
import ContainerWelcome from '.';

export default {
  title: 'containers/ContainerWelcome',
  component: ContainerWelcome,
  args: {},
  argTypes: {},
};

export const Template = () => {
  return (
    <SessionProvider>
      <GlobalStyles />
      <ContainerWelcome />
    </SessionProvider>
  );
};
