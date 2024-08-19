import { SessionProvider } from 'next-auth/react';
import ContainerSignUp from '.';

export default {
  title: 'containers/ContainerSignUp',
  component: ContainerSignUp,
  args: {},
  argTypes: {},
};

export const Template = () => {
  return (
    <SessionProvider>
      <ContainerSignUp />
    </SessionProvider>
  );
};
