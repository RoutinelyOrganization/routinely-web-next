'use client';

import ButtonDanger from '@/components/buttons/ButtonDanger';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import PopUp from '@/components/popUp';
import { useTask } from '@/hooks/useTask';
import * as S from './styles';

export interface IAction {
  children: string;
  textButtonDanger?: string;
  textButtonPrimary?: string;
}

export default function ConfirmAction({ children, textButtonDanger, textButtonPrimary }: IAction) {
  const { executeServiceTask, setActionForm, setFormIsOpen } = useTask();

  const handleOptions = async (operation: 'yes' | 'not') => {
    switch (operation) {
      case 'yes':
        executeServiceTask && (await executeServiceTask());
        setActionForm(null);
        setFormIsOpen(false);
        break;
      case 'not':
        setActionForm(null);
        break;
    }
  };

  return (
    <PopUp>
      <S.ContainerText>{children}</S.ContainerText>
      <S.ContainerDoubleButton>
        {textButtonPrimary && (
          <ButtonPrimary name={textButtonPrimary} onClick={() => handleOptions('yes')}>
            {textButtonPrimary}
          </ButtonPrimary>
        )}
        {textButtonDanger && (
          <ButtonDanger name={textButtonDanger} onClick={() => handleOptions('not')}>
            {textButtonDanger}
          </ButtonDanger>
        )}
      </S.ContainerDoubleButton>
    </PopUp>
  );
}
