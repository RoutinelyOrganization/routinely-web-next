import Header from '@/components/headers';
import LogoShared from '@/components/logos/LogoShared';
import * as S from './styles';

export interface IPasswordsPagesContainer {
  title: string;
  subtitle: string;
  form: React.ReactNode;
  headerHrefBackPage: string;
  image: {
    src: string;
    alt: string;
  };
}

export default function PasswordsPagesContainer({
  title,
  subtitle,
  form,
  headerHrefBackPage,
  image: { src, alt },
}: IPasswordsPagesContainer) {
  return (
    <>
      <Header header="secondary" hrefBackPage={headerHrefBackPage} />
      <S.Main>
        <S.Wrapper>
          <LogoShared />
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
          {form}
        </S.Wrapper>
        <S.ImageNext src={src} alt={alt} />
      </S.Main>
    </>
  );
}
