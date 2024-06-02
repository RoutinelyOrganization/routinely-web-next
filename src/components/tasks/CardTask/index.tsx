'use client';

import ButtonEdit from '@/components/buttons/ButtonEdit';
import CustonCheckedBox from '@/components/forms/fields/CustonCheckedBox';
import { useTask } from '@/hooks/useTask';
import { typeTaskOptions } from '@/mocks/typeTask';
import type { Task } from '@/types/task';
import { useState } from 'react';
import * as S from './styles';

interface ICardTask {
  task: Task;
}

export default function CardTask({ task }: ICardTask) {
  const { setFormIsOpen, setSelectedTask, setSelectedTypeTask } = useTask();
  const { id, name, type, checked, category } = task;
  const [isChecked, setChecked] = useState<boolean>(checked);
  const descrptionFormated = name.length > 91 ? name.slice(0, 90) + '...' : name;
  const typeTaskOption = typeTaskOptions.find(item => item.type === type);
  const { name: title, icon } = typeTaskOption || {};

  const handleEditTask = () => {
    setSelectedTask(task);
    setFormIsOpen(true);
    setSelectedTypeTask(type);
  };
  return (
    <S.Container category={type} checked={isChecked}>
      <S.Title>
        <i>{icon}</i>
        {title}
      </S.Title>
      <S.ContainerDescription>
        <p>{descrptionFormated}</p>
        <CustonCheckedBox checked={isChecked} id={id} setChecked={setChecked} />
      </S.ContainerDescription>
      <S.ContainerBtnIcon>
        <S.Button>{category}</S.Button>
        <ButtonEdit onClick={handleEditTask} />
      </S.ContainerBtnIcon>
    </S.Container>
  );
}
