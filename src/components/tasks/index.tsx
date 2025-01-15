'use client';

import { makeGetTasks } from '@/factories/services/makeGetTasks';
import { useCalendar } from '@/hooks/useCalendar';
import { useTask } from '@/hooks/useTask';
import type { DaysOfWeek } from '@/types/weekDays';
import { dateFormat, TimeFormat } from '@/utils/formats/dateAndTime';
import { stringToDate } from '@/utils/formats/stringToDate';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { type Task } from '../../types/task';
import CardTask from './CardTask';
import * as S from './styles';

export interface ITask {
  tasks: Task[];
}

export default function Task({ tasks: tasksReceived }: ITask) {
  const { data: session } = useSession();
  const { setTasks, tasks } = useTask();
  const { day, month, year } = useCalendar();

  const [currentTasks, setCurrentTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState('all tasks');

  useEffect(() => {
    setTasks(
      tasksReceived?.map(task => ({
        ...task,
        date: `${dateFormat(task.date)} ${TimeFormat(task.date)}`,
      })) || [],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const tasksFiltered = useCallback(
    (currentTasks: Task[] = [], checked: boolean = false, type: string = 'all tasks') => {
      const {
        shortDateString: nowStr,
        timestamp: nowTs,
        weekDay: nowWeekDay,
      } = stringToDate(`${year}-${month}-${day}`);

      return currentTasks.filter(task => {
        if (task.checked === checked && (type === 'all tasks' || task.type === type)) {
          if (checked) return true;

          const { shortDateString: initialDateStr, timestamp: initialDateTs } = stringToDate(
            task.date,
          );
          if (initialDateStr === nowStr) return true;

          const { timestamp: finallyDateTs } = stringToDate(task.finallyDate);
          if (
            task.finallyDate &&
            finallyDateTs > nowTs &&
            initialDateTs < nowTs &&
            task.weekDays.includes(nowWeekDay as DaysOfWeek)
          )
            return true;
        }
        return false;
      });
    },
    [day, month, year],
  );

  useEffect(() => {
    if (!day) {
      return;
    }

    let newCurrentTasks: Task[] = [];
    switch (selected) {
      case 'all tasks':
        newCurrentTasks = tasksFiltered(tasks);
        break;
      case 'completed':
        newCurrentTasks = tasksFiltered(tasks, true);
        break;
      default:
        newCurrentTasks = tasksFiltered(tasks, false, selected);
        break;
    }

    setCurrentTasks(newCurrentTasks);
  }, [selected, tasks, day, tasksFiltered]);

  useEffect(() => {
    if (!session?.user.token) return;

    (async () => {
      const { status, body } = await makeGetTasks(session?.user.token);

      if (status === 200) setTasks(body.tasks);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user.token, month]);

  const handleTasks = (id: string) => {
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
      {tasks && tasks.length ? (
        <S.ContainerTask>
          {currentTasks.map((task, index) => (
            <CardTask key={task.id || `${index}`} task={task} onChangeCheck={handleTasks} />
          ))}
        </S.ContainerTask>
      ) : (
        <S.NoTask>Você ainda não tem atividades para hoje.</S.NoTask>
      )}
    </S.Conteiner>
  );
}
