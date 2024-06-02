'use client';

import { typeTaskOptions } from '@/mocks/typeTask';
import { Task } from '@/types/task';
import { TypeTask } from '@/types/typeTasks';
import { createContext, useEffect, useState } from 'react';

interface ITaskProvider {
  children: React.ReactNode;
}

interface ITaskContext {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  selectedTask: Task | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  formIsOpen: boolean;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTypeTask: TypeTask | null;
  setSelectedTypeTask: React.Dispatch<React.SetStateAction<TypeTask['type'] | null>>;
  selectedActionForm: 'create' | 'update' | 'delete' | null;
  setActionForm: React.Dispatch<React.SetStateAction<'create' | 'update' | 'delete' | null>>;
  executeServiceTask: () => Promise<void>;
}

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);
TaskContext.displayName = 'task context';

export const TaskProvider: React.FC<ITaskProvider> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
  const [selectedTypeTaskCtx, setSelectedTypeTask] = useState<TypeTask['type'] | null>(null);
  const [selectedTypeTask, setSelectedTypeTaskCtx] = useState<TypeTask | null>(null);
  const [selectedActionForm, setActionForm] = useState<'create' | 'update' | 'delete' | null>(null);
  const [executeServiceTask, setExecuteServiceTask] = useState<() => Promise<void>>(() =>
    Promise.resolve(),
  );

  useEffect(() => {
    switch (selectedActionForm) {
      case 'create':
        setExecuteServiceTask(() => {
          return () => {
            console.log('create');
            return Promise.resolve();
          };
        });
        break;
      case 'update':
        setExecuteServiceTask(() => {
          return () => {
            console.log('update');
            return Promise.resolve();
          };
        });
        break;
      case 'delete':
        setExecuteServiceTask(() => {
          return () => {
            console.log('delete');
            return Promise.resolve();
          };
        });
        break;
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
