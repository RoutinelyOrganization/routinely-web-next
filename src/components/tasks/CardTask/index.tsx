import ButtonEdit from '@/components/buttons/ButtonEdit';
import CustonCheckedBox from '@/components/forms/fields/CustonCheckedBox';
import { Task } from '@/types/task';
import { useState } from 'react';
import * as S from './styles';

interface IItemOptionsProps {
  title: string;
  icon: string;
}

type IOptionsProps = {
  [key in 'habit' | 'project' | 'task']: IItemOptionsProps;
};

interface ICardTask {
  task: Task;
}

export default function CardTask({ task }: ICardTask) {
  const options: IOptionsProps = {
    habit: {
      title: 'Hábitos',
      icon: '📌',
    },
    project: {
      title: 'Projeto',
      icon: '🚀',
    },
    task: {
      title: 'Tarefa',
      icon: '📋',
    },
  };

  const { id, name, type, checked } = task;

  const [isChecked, setChecked] = useState<boolean>(checked);
  const { icon, title } = options[type];
  const descrptionFormated = name.length > 91 ? name.slice(0, 90) + '...' : name;

  // const { setFormTaskOpen, setTempTask } = useContext(TasksContext);
  const handleEditTask = () => {
    console.log(task);

    // setTempTask({ ...task, checked: isChecked });
    // setFormTaskOpen(true);
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
        <S.Button>Carreira</S.Button>
        <ButtonEdit onClick={handleEditTask} />
      </S.ContainerBtnIcon>
    </S.Container>
  );
}
