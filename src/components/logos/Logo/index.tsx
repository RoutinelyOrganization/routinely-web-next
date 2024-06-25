import logo from '@public/icons/logo_horizontal.svg';
import Image from 'next/image';
import * as S from './styles';

export default function Logo() {
  return (
    <S.LinkNext href="/">
      <Image src={logo} alt="logo Routinely" />
    </S.LinkNext>
  );
}
