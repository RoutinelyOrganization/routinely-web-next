import { GlobalStyles } from '@/styles/globalStyles';
import { SessionProvider } from 'next-auth/react';
import ContainerValidationCode from '.';

export default {
  title: 'containers/ContainerValidationCode',
  component: ContainerValidationCode,
  args: {},
  argTypes: {},
};

export const Template = () => {
  return (
    <SessionProvider>
      <GlobalStyles />
      <ContainerValidationCode />
    </SessionProvider>
  );
};
