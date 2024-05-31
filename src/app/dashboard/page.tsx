'use client';

import TaskForm from '@/components/forms/Task';
import PopUp from '@/components/popUp';
import Task from '@/components/tasks';
import { tasks } from '@/mocks/task';
import { useState } from 'react';

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
      <Task tasks={tasks} />
    </>
  );

  // return (
  //   <CalendarProvider>
  //     {formTaskOpen && (
  //       <PopUpCustom setIsTaskOpen={setSelectTypeTaskOpen}>
  //         {/* <FormTask
  //             setIsTaskOpen={setIsTaskOpen}
  //             setCrudTasksOptions={setCrudTasksOptions}
  //             setDataTask={setDataTask}
  //             setIsConfirmActionOpen={setIsConfirmActionOpen}
  //           /> */}
  //         <FormTask />
  //       </PopUpCustom>
  //     )}

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
  //     <S.Container $visible={selectTypeTaskOpen}>
  //       <Header />
  //       <S.Main onClick={closeTaskInMain}>
  //         <S.ContainerCalendar>
  //           <SectionCalendar />
  //           <S.ContainerNewTask>
  //             <S.ButtonEditTask onClick={() => setSelectTypeTaskOpen(true)}>
  //               <img src={closeIcon} alt="close button" />
  //             </S.ButtonEditTask>
  //             {selectTypeTaskOpen && <TypeTask />}
  //           </S.ContainerNewTask>
  //         </S.ContainerCalendar>
  //         <Task tasks={tasks} />

  //         {/* <S.ContainerCalendar>
  //             <DateCalendar />
  //             <img className="desktop" src={ImageCompleteTask} alt="imagem da pagina complete Task" />
  //             <img className="tablet" src={ImageCompleteTask2} alt="imagem da pagina complete Task" />
  //           </S.ContainerCalendar> */}
  //       </S.Main>
  //     </S.Container>
  //     <ButtonFooter onClick={() => setSelectTypeTaskOpen(v => !v)}>
  //       <img src={newTask} alt="" />
  //     </ButtonFooter>
  //   </CalendarProvider>
  // );
}
