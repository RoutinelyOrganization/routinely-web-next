'use client';

import { TypeTask } from '@/types/typeTasks';
import addIcon from '@public/icons/addIcon.svg';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';

export default function AddNewTask() {
  const [selectTypeTaskOpen, setSelectTypeTaskOpen] = useState(false);
  // const { formTypeAndDescTask, setFormTaskOpen, setFormTypeTask } = useContext(TasksContext);
  const formTypeAndDescTask: TypeTask[] = [
    { type: 'habit' },
    { type: 'project' },
    { type: 'task' },
  ];

  const handleTypeTask = ({ type }: TypeTask) => {
    console.log(type);

    // setFormTaskOpen(true);
    // setFormTypeTask(type);
  };

  return (
    <S.ContainerNewTask>
      <S.ButtonAddTask onClick={() => setSelectTypeTaskOpen(!selectTypeTaskOpen)}>
        <Image src={addIcon} alt="close icon" />
      </S.ButtonAddTask>
      {selectTypeTaskOpen && (
        <S.ContainerTypeTask>
          {formTypeAndDescTask.map(option => (
            <S.Option key={option.type} onClick={() => handleTypeTask({ type: option.type })}>
              {option.type}
            </S.Option>
          ))}
        </S.ContainerTypeTask>
      )}
    </S.ContainerNewTask>
  );
}
