import { typeTaskOptions } from '@/constants/typeTask';
import type { ITaskContext } from '@/contexts/TaskContext';
import { tasks } from './taskMock';

export const useTaskMock: jest.Mock<ITaskContext> = jest.fn().mockReturnValue({
  setFormIsOpen: jest.fn(),
  setActionForm: jest.fn(),
  setSelectedTask: jest.fn(),
  setSelectedTypeTask: jest.fn(),
  executeServiceTask: { execute: jest.fn().mockResolvedValue(true) },
  selectedActionForm: { openConfirm: false, action: null },
  selectedTypeTask: typeTaskOptions[0],
  selectedTask: null,
  setTasks: jest.fn(),
  tasks: tasks,
});
