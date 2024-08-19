import { TaskProvider } from '@/providers/taskProvider';
import { tasks } from '@mocks/taskMock';
import { useTaskMock } from '@mocks/useTaskContextMock';
import { fireEvent, render, screen } from '@testing-library/react';
import Task from '.';

const mockTasks = tasks;
const expectedTasks = mockTasks.filter(task => !task.checked);
const expectedTasksHabit = mockTasks.filter(task => task.type === 'habit' && !task.checked);
const expectedTasksTask = mockTasks.filter(task => task.type === 'task' && !task.checked);
const expectedTasksCompleted = mockTasks.filter(task => task.checked);

const TaskWithProvider = () => (
  <TaskProvider>
    <Task tasks={mockTasks} />
  </TaskProvider>
);

beforeEach(() => {
  useTaskMock.mockClear();
});

describe('Task component', () => {
  it('should render correctly with tasks', () => {
    render(<TaskWithProvider />);

    expect(screen.getByText('Todas as atividades')).toBeInTheDocument();
    expectedTasks.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });
    expectedTasksCompleted.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });
  });

  it('should filter and display only incomplete tasks when "Hábitos" is selected', () => {
    render(<TaskWithProvider />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'habit' } });
    expect(screen.getByText('Hábitos')).toBeInTheDocument();
    expectedTasksHabit.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
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
    expectedTasksTask.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });

    expectedTasksCompleted.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });

    expectedTasksHabit.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });
  });

  it('should render completed tasks when "Concluidas" is selected', () => {
    render(<TaskWithProvider />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'completed' } });

    expect(screen.getByText('Concluídas')).toBeInTheDocument();
    expectedTasksCompleted.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });

    expectedTasks.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });
  });

  it('should change display when task is checked', () => {
    render(<TaskWithProvider />);

    const [checkbox] = screen.getAllByTestId('checkbox');
    const [taskChecked, ...expectTasksUpdated] = expectedTasks;

    expectedTasks.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });

    fireEvent.click(checkbox);

    expectTasksUpdated.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });
    expect(screen.queryByText(taskChecked.name)).not.toBeInTheDocument();

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'completed' } });

    expectTasksUpdated.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });

    expectedTasksCompleted.push(taskChecked);
    expectedTasksCompleted.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });
  });
});
