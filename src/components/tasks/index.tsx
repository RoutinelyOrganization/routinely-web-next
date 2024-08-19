'use client';

import { useTask } from '@/hooks/useTask';
import { useEffect, useState } from 'react';
import { type Task } from '../../types/task';
import CardTask from './CardTask';
import * as S from './styles';

export interface ITask {
  tasks: Task[];
}

export default function Task({ tasks: tasksReceived }: ITask) {
  const { setTasks, tasks } = useTask();

  const [currentTasks, setCurrentTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState('all tasks');

  useEffect(() => {
    setTasks(tasksReceived);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let newCurrentTasks: Task[] = [];
    switch (selected) {
      case 'all tasks':
        newCurrentTasks = tasks && tasks.filter(task => !task.checked);
        break;
      case 'completed':
        newCurrentTasks = tasks && tasks.filter(task => task.checked);
        break;
      default:
        newCurrentTasks = tasks.filter(task => task.type === selected && !task.checked);
        break;
    }

    setCurrentTasks(newCurrentTasks);
  }, [selected, tasks]);

  const handleTasks = (id: number) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task,
    );
    setTasks(newTasks);
  };

  return (
    <S.Conteiner>
      <S.Select onChange={e => setSelected(e.target.value)} value={selected}>
        <option value="all tasks">Todas as atividades</option>
        <option value="habit">Hábitos</option>
        <option value="task">Tarefas</option>
        <option value="completed">Concluídas</option>
      </S.Select>
      {tasks.length ? (
        <S.ContainerTask>
          {currentTasks.length &&
            currentTasks.map(task => (
              <CardTask key={task.id} task={task} onChangeCheck={handleTasks} />
            ))}
        </S.ContainerTask>
      ) : (
        // <ContainerTask tasks={isTask} />
        <S.NoTask>Você ainda não tem atividades para hoje.</S.NoTask>
      )}
    </S.Conteiner>
  );
}
