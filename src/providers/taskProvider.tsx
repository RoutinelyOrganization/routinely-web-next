'use client';

import { typeTaskOptions } from '@/constants/typeTask';
import type { ActionFormExecuteType, ExecuteServiceType } from '@/contexts/TaskContext';
import { TaskContext } from '@/contexts/TaskContext';
import { makeCreateTask } from '@/factories/services/makeCreateTask';
import { makeDeleteTask } from '@/factories/services/makeDeleteTask';
import { makeUpdateTask } from '@/factories/services/makeUpdateTask';
import type { Task } from '@/types/task';
import type { TypeTask } from '@/types/typeTasks';
import { useEffect, useState } from 'react';

interface ITaskProvider {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<ITaskProvider> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
  const [selectedTypeTaskCtx, setSelectedTypeTask] = useState<TypeTask['type'] | null>(null);
  const [selectedTypeTask, setSelectedTypeTaskCtx] = useState<TypeTask | null>(null);
  const [selectedActionForm, setActionForm] = useState<ActionFormExecuteType>({
    openConfirm: false,
    action: null,
  });
  const [executeServiceTask, setExecuteServiceTask] = useState<ExecuteServiceType>({
    execute: async () => {},
  });

  useEffect(() => {
    switch (selectedActionForm.action) {
      case 'create':
        setExecuteServiceTask({
          execute: async (data?: any) => {
            const { ok, body } = await makeCreateTask(selectedTask!, data.token);

            if (!ok) return ok;

            setTasks([...tasks, { ...selectedTask!, id: body.id }]);
            setSelectedTask(null);

            return ok;
          },
        });
        break;
      case 'update':
        setExecuteServiceTask({
          execute: async (data?: any) => {
            const { ok } = await makeUpdateTask(selectedTask! || data.task, data.token);

            if (!ok) return ok;

            const id = selectedTask?.id || data.task.id;
            const updatedTask = selectedTask || data.task;
            setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
            setSelectedTask(null);

            return ok;
          },
        });
        break;
      case 'delete':
        setExecuteServiceTask({
          execute: async (data?: any) => {
            await makeDeleteTask(selectedTask!.id, data.token);

            setTasks(tasks.filter(task => task.id !== selectedTask!.id));
            setSelectedTask(null);
            return true;
          },
        });
        break;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTask, selectedActionForm]);

  useEffect(() => {
    const typeTask = typeTaskOptions.filter(item => item.type === selectedTypeTaskCtx)[0];
    setSelectedTypeTaskCtx(typeTask);
  }, [selectedTypeTaskCtx]);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        formIsOpen,
        setFormIsOpen,
        selectedTypeTask,
        setSelectedTypeTask,
        setActionForm,
        executeServiceTask,
        selectedActionForm,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
