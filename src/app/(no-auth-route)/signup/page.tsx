import ButtonSocialGoogle from '@/components/buttons/ButtonSocialGoogle';
import SignUpForm from '@/components/forms/SignUp';
import Header from '@/components/headers';
import LogoShared from '@/components/logos/LogoShared';
import signUpPageImage from '@public/imagens/signUpPageImage.svg';
import Image from 'next/image';
import * as S from './styles';

export default function SignUpPage() {
  return (
    <>
      <Header header="secondary" hrefBackPage="/welcome" />
      <S.Main className="container-main">
        <S.Wrapper>
          <LogoShared />
          <S.Title>Crie sua conta</S.Title>
          <SignUpForm />
          <ButtonSocialGoogle>Continuar com Google</ButtonSocialGoogle>
          <S.LinkNext href="/login">Já possui uma conta?</S.LinkNext>
        </S.Wrapper>
        <Image src={signUpPageImage} alt="Imagem da página de criar conta" />
      </S.Main>
    </>
  );
}
