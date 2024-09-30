'use client';

import { typeTaskOptions } from '@/constants/typeTask';
import { useTask } from '@/hooks/useTask';
import type { TypeTask } from '@/types/typeTasks';
import addIcon from '@public/icons/addIcon.svg';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';

export default function AddNewTask() {
  const [isOpenTypeTask, setIsOpenTypeTask] = useState<boolean>(false);

  return (
    <S.ContainerNewTask>
      <S.ButtonAddTask onClick={() => setIsOpenTypeTask(!isOpenTypeTask)}>
        <Image src={addIcon} alt="icone para adicionar nova tarefa ou hábito" />
      </S.ButtonAddTask>
      {isOpenTypeTask && <TypeTask onClick={() => setIsOpenTypeTask(false)} />}
    </S.ContainerNewTask>
  );
}

export function TypeTask({ onClick }: { onClick: (value: any) => void }) {
  const { setFormIsOpen, setSelectedTypeTask, setActionForm } = useTask();

  const handleTypeTask = (type: TypeTask['type']) => {
    setFormIsOpen(true);
    setSelectedTypeTask(type);
    setActionForm({ action: 'create', openConfirm: false });
    onClick(false);
  };

  return (
    <S.ContainerTypeTask data-testid="container-type-task">
      {typeTaskOptions.map(option => (
        <S.Option key={option.type} onClick={() => handleTypeTask(option.type)}>
          {option.name}
        </S.Option>
      ))}
    </S.ContainerTypeTask>
  );
}
