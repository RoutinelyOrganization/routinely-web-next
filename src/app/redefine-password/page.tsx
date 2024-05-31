import PasswordsPagesContainer from '@/components/containers/PasswordsPagesContainer';
import RedefinePasswordForm from '@/components/forms/RedefinePassword';
import forgotPasswordImage from '@public/imagens/forgotPasswordImage.svg';

export default function RedefinePasswordPage() {
  return (
    <PasswordsPagesContainer
      image={{ src: forgotPasswordImage, alt: 'Personagem pensando em uma nova senha' }}
      headerHrefBackPage="/forgot-password"
      title="Redefinir senha"
      subtitle="Insira o código de verificação enviado no email."
      form={<RedefinePasswordForm />}
    />
  );
}
