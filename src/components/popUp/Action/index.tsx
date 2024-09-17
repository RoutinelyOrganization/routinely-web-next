'use client';

import ButtonDanger from '@/components/buttons/ButtonDanger';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import PopUp from '@/components/popUp';
import { useTask } from '@/hooks/useTask';
import { useSession } from 'next-auth/react';
import * as S from './styles';

export interface IAction {
  children: string;
  textButtonDanger?: string;
  textButtonPrimary?: string;
}

export default function ConfirmAction({ children, textButtonDanger, textButtonPrimary }: IAction) {
  const { data: session } = useSession();

  const { executeServiceTask, setActionForm, setFormIsOpen, selectedActionForm } = useTask();

  const handleOptions = async (operation: 'yes' | 'not') => {
    switch (operation) {
      case 'yes':
        const ok =
          executeServiceTask &&
          (await executeServiceTask.execute({ token: session?.user?.token! }));

        if (ok === false) return;

        setActionForm({ openConfirm: false, action: null });
        setFormIsOpen(false);
        break;
      case 'not':
        setActionForm({ openConfirm: false, action: selectedActionForm.action });
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
