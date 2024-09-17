'use client';

import CalendarContainer from '@/components/containers/CalendarContainer';
import TaskForm from '@/components/forms/Task';
import ConfirmAction from '@/components/popUp/Action';
import Task from '@/components/tasks';
import AddNewTask from '@/components/tasks/AddNewTask';
import { useTask } from '@/hooks/useTask';
import { CalendarProvider } from '@/providers/calendarProvider';
import { type Task as ITask } from '@/types/task';
import ContainerHeaderFooterMobileResponsive from '../ContainerHeaderFooterResponsive';
import * as S from './styles';

export interface IDashboardContainer {
  tasks: ITask[];
}
export default function DashboardContainer({ tasks }: IDashboardContainer) {
  const { formIsOpen, selectedActionForm } = useTask();
  return (
    <ContainerHeaderFooterMobileResponsive>
      {formIsOpen && <TaskForm />}
      {selectedActionForm.openConfirm && (
        <ConfirmAction textButtonPrimary="Sim" textButtonDanger="Não">
          Tem certeza que deseja salvar?
        </ConfirmAction>
      )}
      <S.ContainerPrincipal $isVisible={!formIsOpen}>
        <CalendarProvider>
          <S.Main className="container-main">
            <S.ContainerCalendar>
              <CalendarContainer />
              <AddNewTask />
            </S.ContainerCalendar>
            <Task tasks={tasks} />
          </S.Main>
        </CalendarProvider>
      </S.ContainerPrincipal>
    </ContainerHeaderFooterMobileResponsive>
  );
}
