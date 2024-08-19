import type { ITaskContext } from '@/contexts/TaskContext';

export const useTaskMock: jest.Mock<Partial<ITaskContext>> = jest.fn().mockReturnValue({
  setFormIsOpen: jest.fn(),
  setActionForm: jest.fn(),
  setSelectedTask: jest.fn(),
  setSelectedTypeTask: jest.fn(),
});

