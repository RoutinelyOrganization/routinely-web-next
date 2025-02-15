'use client';

import CalendarContainer from '@/components/containers/CalendarContainer';
import TaskForm from '@/components/forms/Task';
import ConfirmAction from '@/components/popUp/Action';
import Task from '@/components/tasks';
import AddNewTask from '@/components/tasks/AddNewTask';
import { useRefreshSession } from '@/hooks/useRefreshSession';
import { useTask } from '@/hooks/useTask';
import { CalendarProvider } from '@/providers/calendarProvider';
import ContainerHeaderFooterMobileResponsive from '../ContainerHeaderFooterResponsive';
import * as S from './styles';

export default function DashboardContainer() {
  const { selectedActionForm, formIsOpen } = useTask();
  useRefreshSession();
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (!session?.user.token) return;

  //   (async () => {
  //     const { status, body } = await makeGetTasks(session?.user.token);

  //     if (status === 200) setTasks(body.tasks);
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [session?.user.token]);

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
            <Task />
          </S.Main>
        </CalendarProvider>
      </S.ContainerPrincipal>
    </ContainerHeaderFooterMobileResponsive>
  );
}
