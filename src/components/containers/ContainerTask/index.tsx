import CardTask from '@/components/tasks/CardTask';
import type { Task } from '@/types/task';
import * as S from './styles';

interface IContainerTask {
  tasks: Task[];
}

export default function ContainerTask({ tasks }: IContainerTask) {
  return (
    <S.Container>
      {tasks.map(task => (
        <CardTask key={task.id} task={task} />
      ))}
    </S.Container>
  );
}
