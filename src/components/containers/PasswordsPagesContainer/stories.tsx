import ForgotPasswordForm from '@/components/forms/ForgotPassword';
import forgotPasswordImage from '@public/imagens/forgotPasswordImage.svg';
import { SessionProvider } from 'next-auth/react';
import type { IPasswordsPagesContainer } from '.';
import PasswordPagesContainer from '.';

export default {
  title: 'containers/PasswordPagesContainer',
  component: PasswordPagesContainer,
  args: {
    title: 'Crie sua senha',
    subtitle: 'Crie uma senha segura para sua conta',
    form: <ForgotPasswordForm />,
    headerHrefBackPage: '',
    image: {
      src: forgotPasswordImage,
      alt: '',
    },
  },
  argTypes: {},
};

export const Template = (args: IPasswordsPagesContainer) => {
  return (
    <SessionProvider>
      <PasswordPagesContainer {...args} />
    </SessionProvider>
  );
};
