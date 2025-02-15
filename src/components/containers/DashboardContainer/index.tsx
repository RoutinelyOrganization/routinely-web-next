'use client';

import CalendarContainer from '@/components/containers/CalendarContainer';
import TaskForm from '@/components/forms/Task';
import ConfirmAction from '@/components/popUp/Action';
import Task from '@/components/tasks';
import AddNewTask from '@/components/tasks/AddNewTask';
import { makeGetTasks } from '@/factories/services/makeGetTasks';
import { useRefreshSession } from '@/hooks/useRefreshSession';
import { useTask } from '@/hooks/useTask';
import { CalendarProvider } from '@/providers/calendarProvider';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import ContainerHeaderFooterMobileResponsive from '../ContainerHeaderFooterResponsive';
import * as S from './styles';

export default function DashboardContainer() {
  const { setTasks, tasks, selectedActionForm, formIsOpen } = useTask();
  useRefreshSession();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user.token) return;

    (async () => {
      const { status, body } = await makeGetTasks(session?.user.token);

      if (status === 200) setTasks(body.tasks);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user.token]);

  const textOperationForm = (): string => {
    const textByOperation = {
      update: 'Atualizar',
      create: selectedActionForm.action === 'create' && !selectedTask?.id ? 'Salvar' : 'Duplicar',
      delete: 'Excluir',
    };

    return `Tem certeza que deseja ${textByOperation[selectedActionForm.action!]}?`;
  };

  return (
    <ContainerHeaderFooterMobileResponsive hrefBackPage="/">
      {formIsOpen && <TaskForm />}
      {selectedActionForm.openConfirm && (
        <ConfirmAction textButtonPrimary="Sim" textButtonDanger="Não">
          {textOperationForm()}
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
