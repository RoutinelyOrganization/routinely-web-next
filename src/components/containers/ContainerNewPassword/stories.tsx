import { SessionProvider } from 'next-auth/react';
import ContainerNewPassword from '.';

export default {
  title: 'containers/ContainerNewPassword',
  component: ContainerNewPassword,
  args: {},
  argTypes: {},
};

export const Template = () => {
  return (
    <SessionProvider>
      <ContainerNewPassword />
    </SessionProvider>
  );
};
