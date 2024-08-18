'use client';

import ButtonFooter from '@/components/buttons/ButtonFooter';
import CalendarContainer from '@/components/containers/CalendarContainer';
import TaskForm from '@/components/forms/Task';
import Header from '@/components/headers';
import PopUp from '@/components/popUp';
import ConfirmAction from '@/components/popUp/Action';
import Task from '@/components/tasks';
import AddNewTask from '@/components/tasks/AddNewTask';
import { useTask } from '@/hooks/useTask';
import { CalendarProvider } from '@/providers/calendarProvider';
import { type Task as ITask } from '@/types/task';
import newTask from '@public/imagens/nova tarefa.svg';
import Image from 'next/image';
import * as S from './styles';

export interface IDashboardContainer {
  tasks: ITask[];
}
export default function DashboardContainer({ tasks }: IDashboardContainer) {
  const { formIsOpen, selectedActionForm } = useTask();

  return (
    <>
      {formIsOpen && (
        <PopUp>
          <TaskForm />
        </PopUp>
      )}
      {selectedActionForm && <ConfirmAction>mensagem</ConfirmAction>}
      <CalendarProvider>
        <Header />
        <S.Main className="container-main">
          <S.ContainerCalendar>
            <CalendarContainer />
            <AddNewTask />
          </S.ContainerCalendar>
          <Task tasks={tasks} />
        </S.Main>
      </CalendarProvider>
      <ButtonFooter>
        <Image src={newTask} alt="" />
      </ButtonFooter>
    </>
  );
}
