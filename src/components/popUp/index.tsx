import ButtonFooter from '@/components/buttons/ButtonFooter';
import React from 'react';
import * as S from './styles';

export interface IPopUpProps {
  children: React.ReactNode;
}

export default function PopUp({ children }: IPopUpProps) {
  return (
    <S.Container>
      <S.Modal data-testid="popUp">{children}</S.Modal>
      <ButtonFooter />
    </S.Container>
  );
}
