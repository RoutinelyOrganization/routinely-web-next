import logo from '@public/icons/logoHorizontalSecondary.svg';
import * as S from './styles';
import Image from 'next/image';

export default function LogoShared() {
  return (
    <S.ImageWrapper>
      <Image src={logo} alt="logo Routinely" />
    </S.ImageWrapper>
  );
}
