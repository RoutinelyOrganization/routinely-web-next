import type { ITaskContext } from '@/contexts/TaskContext';

export const useTaskMock: jest.Mock<Partial<ITaskContext>> = jest.fn(() => ({
  selectedTask: null,
  setFormIsOpen: jest.fn(),
  selectedTypeTask: null,
  setActionForm: jest.fn(),
}));
