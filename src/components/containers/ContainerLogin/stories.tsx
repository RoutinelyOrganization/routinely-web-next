import { SessionProvider } from 'next-auth/react';
import ContainerLogin from '.';

export default {
  title: 'containers/ContainerLogin',
  component: ContainerLogin,
  args: {},
  argTypes: {},
};

export const Template = () => {
  return (
    <SessionProvider>
      <ContainerLogin />
    </SessionProvider>
  );
};
