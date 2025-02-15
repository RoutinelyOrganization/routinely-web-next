/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import ButtonEdit from '@/components/buttons/ButtonEdit';
import CustonCheckedBox from '@/components/forms/fields/CustonCheckedBox';
import { typeTaskOptions } from '@/constants/typeTask';
import { useTask } from '@/hooks/useTask';
import type { Task } from '@/types/task';
import type { TypeTask } from '@/types/typeTasks';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { dateFormat, TimeFormat } from '@/utils/formats/dateAndTime';
import * as S from './styles';

export interface ICardTask {
  task: Task;
  onChangeCheck: (id: string) => void;
}

export default function CardTask({ task, onChangeCheck }: ICardTask) {
  const {
    selectedTask,
    setFormIsOpen,
    setSelectedTask,
    setSelectedTypeTask,
    setActionForm,
    executeServiceTask,
  } = useTask();
  const { data: session } = useSession();
  const { id, name, type, checked, category } = task;
  const [isChecked, setChecked] = useState<boolean>(checked);
  const descrptionFormated = name.length > 91 ? name.slice(0, 90) + '...' : name;
  const typeTaskOption = typeTaskOptions.find(item => item.type === type);
  const { name: title, icon } = typeTaskOption as TypeTask;

  const handleEditTask = () => {
    setSelectedTask(task);
    setActionForm({ action: 'update', openConfirm: false });
    setFormIsOpen(true);
    setSelectedTypeTask(type);
  };
  const handleChecked = async (id: string) => {
    const formattedDate = `${dateFormat(new Date(task.date))} ${TimeFormat(new Date(task.date))}`;
    setSelectedTask({ ...task, checked: !isChecked, date: formattedDate });
    setChecked(!isChecked);
    onChangeCheck(id);
  };

  useEffect(() => {
    setActionForm({ action: 'update', openConfirm: false });
  }, [isChecked]);

  useEffect(() => {
    if (isChecked === checked || !selectedTask) {
      return;
    }

    (async () => {
      await executeServiceTask.execute({
        task: selectedTask!,
        token: session?.user?.token!,
      });
    })();
  }, [selectedTask, setActionForm]);

  return (
    <S.Container category={type} checked={isChecked}>
      <S.Title>
        <i>{icon}</i>
        {title}
      </S.Title>
      <S.ContainerDescription>
        <p>{descrptionFormated}</p>
        <CustonCheckedBox checked={isChecked} id={id} onClick={() => handleChecked(id)} />
      </S.ContainerDescription>
      <S.ContainerBtnIcon>
        <S.Button>{category}</S.Button>
        <ButtonEdit onClick={handleEditTask} />
      </S.ContainerBtnIcon>
    </S.Container>
  );
}
