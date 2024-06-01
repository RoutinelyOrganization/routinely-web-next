'use client';

import ButtonFooter from '@/components/buttons/ButtonFooter';
import CalendarContainer from '@/components/containers/CalendarContainer';
import TaskForm from '@/components/forms/Task';
import Header from '@/components/headers';
import PopUp from '@/components/popUp';
import Task from '@/components/tasks';
import AddNewTask from '@/components/tasks/AddNewTask';
import { CalendarProvider } from '@/contexts/CalendarContext';
import { tasks } from '@/mocks/task';
import newTask from '@public/imagens/nova tarefa.svg';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';

export interface Itasks {
  id: number;
  name: string;
  date: Date;
  hour: string;
  description: string;
  priority: string;
  tag: string;
  category: string;
  checked?: boolean;
}

export default function DashboardPage() {
  const [openForm] = useState(false);
  // const { handleAddTask, handleEditTask, handleDeleteTask } = UseCRUD();
  // const [selectTypeTaskOpen, setSelectTypeTaskOpen] = useState<boolean>(false);
  // const [isConfirmActionOpen, setIsConfirmActionOpen] = useState<boolean>(false);
  // const [crudTasksOptions, setCrudTasksOptions] = useState<
  //   'addTask' | 'editTask' | 'deleteTask' | 'duplicateTask' | null
  // >(null);
  // const [dataTask, setDataTask] = useState<IAddTaskForm | null>(null);
  // const { formTaskOpen, setFormTaskOpen } = useContext(TasksContext);

  // const { user } = useContext(UserContext);
  // const token = localStorage.getItem("token");
  // const navigate = useNavigate();
  // const { authorization } = useAuth();

  // const crudTasks = {
  //   addTask: {
  //     name: "adicionar",
  //     execute: async (props: AddTaskProps) => {
  //       const task = await handleAddTask(props.data);
  //       return task;
  //     },
  //   },

  //   duplicateTask: {
  //     name: "duplicar",
  //     execute: async (props: AddTaskProps) => {
  //       const task = await handleAddTask(props.data);
  //       return task;
  //     },
  //   },

  //   editTask: {
  //     name: "editar",
  //     execute: async (props: EditTaskProps) => {
  //       const task = await handleEditTask(props.id, props.data, props.tasks);
  //       return task;
  //     },
  //   },

  //   deleteTask: {
  //     name: "excluir",
  //     execute: async (props: DeleteTaskProps) => {
  //       const task = await handleDeleteTask(props.id, props.tasks);
  //       return task;
  //     },
  //   },
  // };

  // const closeTaskInMain = () => {
  //   if (selectTypeTaskOpen) {
  //     setSelectTypeTaskOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   authorization().catch(() => {
  //     navigate("/signInPage");
  //   });

  //   if (!user.email && !token) {
  //     navigate("/signInPage");
  //   }
  // }, [token, user.email, navigate, authorization]);

  return (
    <>
      {openForm && (
        <PopUp>
          <TaskForm />
        </PopUp>
      )}
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

  // return (
  //     {isConfirmActionOpen && (
  //       <PopupAlert>
  //         <ConfirmAction
  //           setIsDeleteTaskOpen={setIsConfirmActionOpen}
  //           crudTask={crudTasks[crudTasksOptions!].execute}
  //           dataTask={dataTask!}
  //           setIsTaskOpen={setSelectTypeTaskOpen}
  //         >
  //           {`Tem certeza que deseja ${crudTasks[crudTasksOptions!].name} a tarefa?`}
  //         </ConfirmAction>
  //       </PopupAlert>
  //     )}
  // );
}
