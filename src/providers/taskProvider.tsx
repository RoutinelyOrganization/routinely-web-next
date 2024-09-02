'use client';

import { typeTaskOptions } from '@/constants/typeTask';
import type { ExecuteServiceType } from '@/contexts/TaskContext';
import { TaskContext } from '@/contexts/TaskContext';
import { makeCreateTask } from '@/factories/services/makeCreateTask';
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
  const [selectedActionForm, setActionForm] = useState<'create' | 'update' | 'delete' | null>(null);
  const [executeServiceTask, setExecuteServiceTask] = useState<ExecuteServiceType>({
    execute: async () => {},
  });

  useEffect(() => {
    switch (selectedActionForm) {
      case 'create':
        setExecuteServiceTask({
          execute: async () => {
            await makeCreateTask(selectedTask!);
            setSelectedTask(null);
          },
        });
        break;
      //   case 'update':
      //     setExecuteServiceTask(() => {
      //       return () => {
      //         return Promise.resolve();
      //       };
      //     });
      //     break;
      //   case 'delete':
      //     setExecuteServiceTask(() => {
      //       return () => {
      //         return Promise.resolve();
      //       };
      //     });
      //     break;
    }
  }, [selectedActionForm]);

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
