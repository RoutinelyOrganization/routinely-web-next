import PasswordsPagesContainer from '@/components/containers/PasswordsPagesContainer';
import ForgotPasswordForm from '@/components/forms/ForgotPassword';
import forgotPasswordImage from '@public/imagens/forgotPasswordImage.svg';

export default function ContainerForgotPassword() {
  return (
    <PasswordsPagesContainer
      image={{ src: forgotPasswordImage, alt: 'Personagem tentando lembrar a senha' }}
      headerHrefBackPage="/login"
      title="Esqueceu sua senha?"
      subtitle="Digite o e-mail cadastrado na sua conta Routinely"
      form={<ForgotPasswordForm />}
    />
  );
}
