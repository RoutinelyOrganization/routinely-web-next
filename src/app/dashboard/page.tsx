import DashboardContainer from '@/components/containers/DashboardContainer';
import { TaskProvider } from '@/contexts/TaskContext';

export default function DashboardPage() {
  // const { formIsOpen } = useTask();
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
    <TaskProvider>
      <DashboardContainer />
    </TaskProvider>
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
