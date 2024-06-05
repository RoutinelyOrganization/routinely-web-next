import PasswordsPagesContainer from '@/components/containers/PasswordsPagesContainer';
import RedefinePasswordForm from '@/components/forms/CodeValidation';
import forgotPasswordImage from '@public/imagens/forgotPasswordImage.svg';
import { metadata } from '../layout';

export default function ValidationCodePage() {
  metadata.title = 'Routinely - Redefinir senha';
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
