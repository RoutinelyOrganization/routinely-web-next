import CardTask from '@/components/tasks/CardTask';
import type { Task } from '@/types/task';
import { useEffect, useState } from 'react';
import * as S from './styles';

export interface IContainerTask {
  tasks: Task[];
}

export default function ContainerTask({ tasks: tasksReceived }: IContainerTask) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(tasksReceived);
  }, [tasksReceived]);

  const handleTasks = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  };
  return (
    <S.Container>
      {tasks.map(task => (
        <CardTask key={task.id} task={task} onChangeCheck={handleTasks} />
      ))}
    </S.Container>
  );
}
