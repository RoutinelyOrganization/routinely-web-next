import type { ITaskContext } from '@/contexts/TaskContext';

export const useTaskMock: jest.Mock<Partial<ITaskContext>> = jest.fn(() => ({
  setActionForm: jest.fn(),
  setFormIsOpen: jest.fn(),
  setSelectedTask: jest.fn(),
  setSelectedTypeTask: jest.fn(),
  setTasks: jest.fn(),
}));
