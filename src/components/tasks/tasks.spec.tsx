import { CalendarProvider } from '@/providers/calendarProvider';
import { TaskProvider } from '@/providers/taskProvider';
import type { DaysOfWeek } from '@/types/weekDays';
import { stringToDate } from '@/utils/formats/stringToDate';
import { tasks } from '@mocks/taskMock';
import { useTaskMock } from '@mocks/useTaskContextMock';
import { fireEvent, render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import Task from '.';
import { type Task as ITask } from '../../types/task';

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  status: 200,
  json: () => Promise.resolve({ tasks }),
});
jest.mock('next-auth/react', () => ({
  signOut: jest.fn(),
  useSession: jest.fn(),
}));

const tasksFiltered = (
  currentTasks: ITask[] = [],
  checked: boolean = false,
  type: string = 'all tasks',
) => {
  const { shortDateString: nowStr, timestamp: nowTs, weekDay: nowWeekDay } = stringToDate();

  return currentTasks.filter(task => {
    if (task.checked === checked && (type === 'all tasks' || task.type === type)) {
      if (checked) return true;

      const { shortDateString: initialDateStr, timestamp: initialDateTs } = stringToDate(task.date);
      if (initialDateStr === nowStr) return true;

      const { timestamp: finallyDateTs } = stringToDate(task.finallyDate);
      if (
        task.finallyDate &&
        finallyDateTs > nowTs &&
        initialDateTs < nowTs &&
        task.weekDays.includes(nowWeekDay as DaysOfWeek)
      )
        return true;
    }
    return false;
  });
};

const mockTasks = tasks;
const allTasks = tasksFiltered(mockTasks);
const expectedTasksHabit = tasksFiltered(mockTasks, false, 'habit');
const expectedTasksTask = tasksFiltered(mockTasks, false, 'task');
const expectedTasksCompleted = tasksFiltered(mockTasks, true);

const TaskWithProvider = () => (
  <TaskProvider>
    <CalendarProvider>
      <Task />
    </CalendarProvider>
  </TaskProvider>
);

beforeEach(() => {
  useTaskMock.mockClear();
  (useSession as jest.Mock).mockReturnValue({ data: { user: { token: 'fake-token' } } });
});

describe('Task component', () => {
  it('should render correctly with tasks', async () => {
    render(<TaskWithProvider />);

    expect(screen.getByText('Todas as atividades')).toBeInTheDocument();

    allTasks.forEach(async task => {
      expect(await screen.findByText(task.name)).toBeInTheDocument();
    });
    expectedTasksCompleted.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });
  });

  it('should filter and display only incomplete tasks when "Hábitos" is selected', () => {
    render(<TaskWithProvider />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'habit' } });
    expect(screen.getByText('Hábitos')).toBeInTheDocument();
    expectedTasksHabit.forEach(async task => {
      expect(await screen.findByText(task.name)).toBeInTheDocument();
    });
    expectedTasksCompleted.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });
    expectedTasksTask.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });
  });

  it('should filter and display only incomplete tasks when "Tarefas" is selected', () => {
    render(<TaskWithProvider />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'task' } });

    expect(screen.getByText('Tarefas')).toBeInTheDocument();
    expectedTasksTask.forEach(async task => {
      expect(await screen.findByText(task.name)).toBeInTheDocument();
    });

    expectedTasksCompleted.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });

    expectedTasksHabit.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });
  });

  it('should render completed tasks when "Concluídas" is selected', () => {
    render(<TaskWithProvider />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'completed' } });

    expect(screen.getByText('Concluídas')).toBeInTheDocument();

    expectedTasksCompleted.forEach(async task => {
      expect(await screen.findByText(task.name)).toBeInTheDocument();
    });

    allTasks.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });
  });
});
