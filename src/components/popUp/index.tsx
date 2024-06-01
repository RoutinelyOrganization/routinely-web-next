import ButtonFooter from '@/components/buttons/ButtonFooter';
import Header from '@/components/headers';
import React from 'react';
import * as S from './styles';

interface IPopUpProps {
  children: React.ReactNode;
}

export default function PopUp({ children }: IPopUpProps) {
  return (
    <S.Container>
      <Header />
      <S.Modal>{children}</S.Modal>
      <ButtonFooter />
    </S.Container>
  );
}
