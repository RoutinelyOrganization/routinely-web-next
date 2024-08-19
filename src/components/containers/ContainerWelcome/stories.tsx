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
      <ContainerWelcome />
    </SessionProvider>
  );
};
