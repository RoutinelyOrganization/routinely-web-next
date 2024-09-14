'use client';

import type { Task } from '@/types/task';
import type { TypeTask } from '@/types/typeTasks';
import { createContext } from 'react';

export type ExecuteServiceType = {
  execute: (data?: any) => Promise<any>;
};

export type ActionFormExecuteType = {
  openConfirm: boolean;
  action: 'create' | 'update' | 'delete' | null;
};

export interface ITaskContext {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  selectedTask: Task | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  formIsOpen: boolean;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTypeTask: TypeTask | null;
  setSelectedTypeTask: React.Dispatch<React.SetStateAction<TypeTask['type'] | null>>;
  selectedActionForm: ActionFormExecuteType;
  setActionForm: React.Dispatch<React.SetStateAction<ActionFormExecuteType>>;
  executeServiceTask: ExecuteServiceType;
  nameService?: string;
}

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);
TaskContext.displayName = 'task context';
