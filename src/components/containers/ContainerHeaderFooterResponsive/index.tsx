'use client';

import ButtonFooter from '@/components/buttons/ButtonFooter';
import Header from '@/components/headers';
import { TypeTask } from '@/components/tasks/AddNewTask';
import { useTask } from '@/hooks/useTask';
import Start from '@public/imagens/início.svg';
import newTask from '@public/imagens/nova tarefa.svg';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';

export interface IContainerHeaderFooterMobileResponsiveProps {
  children: React.ReactNode;
}

export default function ContainerHeaderFooterMobileResponsive({
  children,
}: IContainerHeaderFooterMobileResponsiveProps) {
  const { formIsOpen, setFormIsOpen, setSelectedTypeTask, setSelectedTask } = useTask();
  const [openTypeTaskContainer, setOpenTypeTaskContainer] = useState(false);

  const handleButtonFooter = () => {
    formIsOpen
      ? (setFormIsOpen(false), setSelectedTask(null), setSelectedTypeTask(null))
      : setOpenTypeTaskContainer(!openTypeTaskContainer);
  };

  return (
    <S.Container>
      <Header />
      {children}
      <S.ContainerFooter>
        {openTypeTaskContainer && <TypeTask onClick={() => setOpenTypeTaskContainer(false)} />}
        <ButtonFooter onClick={handleButtonFooter}>
          {!formIsOpen ? (
            <Image src={newTask} alt="Nova tarefa" />
          ) : (
            <Image src={Start} alt="Botão de inicio" />
          )}
        </ButtonFooter>
      </S.ContainerFooter>
    </S.Container>
  );
}
