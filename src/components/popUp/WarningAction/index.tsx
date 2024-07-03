'use client';

import ButtonDanger from '@/components/buttons/ButtonDanger';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import PopUp from '@/components/popUp';
import * as S from './styles';

export interface IWarningAction {
  children: string;
  button?: 'primary' | 'danger';
}

export default function WarningAction({ children, button = 'danger' }: IWarningAction) {
  return (
    <PopUp>
      <S.ContainerText>{children}</S.ContainerText>
      <S.ContainerButton>
        {button === 'primary' ? (
          <ButtonPrimary>Ok</ButtonPrimary>
        ) : (
          <ButtonDanger>Voltar</ButtonDanger>
        )}
      </S.ContainerButton>
    </PopUp>
  );
}
