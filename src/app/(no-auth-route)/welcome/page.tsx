import ButtonPrincipal from '@/components/buttons/ButtonPrimary';
import ButtonSecondary from '@/components/buttons/ButtonSecondary';
import Header from '@/components/headers';
import LogoShared from '@/components/logos/LogoShared';
import welcomePageImage from '@public/imagens/welcomePageImage.svg';
import Image from 'next/image';
import * as S from './styles';

export default function WelcomePage() {
  // const navigate = useNavigate();

  // const { authorization } = useAuth();

  // useEffect(() => {
  //   const fetchAuthorization = async () => {
  //     const { valid } = await authorization();
  //     if (valid) {
  //       navigate('/dashboardpage');
  //     }
  //   };
  //   fetchAuthorization();
  // }, [authorization, navigate]);

  return (
    <>
      <Header header="secondary" hrefBackPage="/" />
      <S.Wrapper className="container-main">
        <div>
          <LogoShared />
          <S.Title>Boas-vindas</S.Title>
          <S.Caption>Escolha uma das opções para acessar </S.Caption>
          <S.ContainerButton>
            <ButtonPrincipal href="/login">Já tenho conta</ButtonPrincipal>
            <ButtonSecondary href="/signup">Criar Conta</ButtonSecondary>
          </S.ContainerButton>
        </div>
        <Image src={welcomePageImage} alt="Imagem da página de boas vindas" />
      </S.Wrapper>
    </>
  );
}
