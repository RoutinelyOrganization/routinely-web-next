'use client';

import ButtonDanger from '@/components/buttons/ButtonDanger';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import PopUp from '@/components/popUp';
import { useTask } from '@/hooks/useTask';
import * as S from './styles';

export interface IAction {
  children: string;
  options?: boolean;
  button?: 'primary' | 'danger';
}

export default function Action({ children, options = false, button = 'danger' }: IAction) {
  const { executeServiceTask, setActionForm, setFormIsOpen } = useTask();

  const handleOptions = async (operation: 'yes' | 'not') => {
    switch (operation) {
      case 'yes':
        await executeServiceTask();
        setActionForm(null);
        setFormIsOpen(false);
        break;
      case 'not':
        setActionForm(null);
        break;
    }
  };

  const handleConfirm = () => {
    return setActionForm(null);
  };

  return (
    <PopUp>
      <S.ContainerText>{children}</S.ContainerText>
      {options ? (
        <S.ContainerDoubleButton>
          <ButtonPrimary onClick={() => handleOptions('yes')}>Sim</ButtonPrimary>
          <ButtonDanger onClick={() => handleOptions('not')}>Não</ButtonDanger>
        </S.ContainerDoubleButton>
      ) : (
        <S.ContainerOneButton>
          {button === 'primary' ? (
            <ButtonPrimary onClick={() => handleConfirm()}>Ok</ButtonPrimary>
          ) : (
            <ButtonDanger onClick={() => handleConfirm()}>Voltar</ButtonDanger>
          )}
        </S.ContainerOneButton>
      )}
    </PopUp>
  );
}
