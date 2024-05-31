import PasswordsPagesContainer from '@/components/containers/PasswordsPagesContainer';
import CreateNewPassword from '@/components/forms/CreateNewPassword';
import newPasswordPageImage from '@public/imagens/NewPasswordPageImage.svg';
import * as S from './styles';

export default function ForgotPasswordPage() {
  return (
    <S.Container>
      <PasswordsPagesContainer
        image={{ src: newPasswordPageImage, alt: 'Personagem observando uma lista de papel' }}
        headerHrefBackPage="/redefine-password"
        title="Criar nova senha"
        subtitle="Escolha uma nova senha abaixo, ela precisa ser diferente da anterior."
        form={<CreateNewPassword />}
      />
    </S.Container>
  );
}
