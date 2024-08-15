import { render, screen, fireEvent } from '@testing-library/react';
import { tasks } from '@mocks/taskMock';
import Task from '.';

const mockTasks = tasks;
const expectedTasks = mockTasks.filter(task => !task.checked);
const expectedTasksHabit = mockTasks.filter(task => task.type === 'habit' && !task.checked);
const expectedTasksTask = mockTasks.filter(task => task.type === 'task' && !task.checked);
const expectedTasksCompleted = mockTasks.filter(task => task.checked);

describe('Task component', () => {
  it('should render correctly with tasks', () => {
    render(<Task tasks={mockTasks} />);
		fireEvent.change(screen.getByRole('combobox'), { target: { value: 'all tasks' } });
    expect(screen.getByText('Todas as atividades')).toBeInTheDocument();
		expectedTasks.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });
		expectedTasksCompleted.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });

	});

  it('should filter and display only incomplete tasks when "Hábitos" is selected', () => {
    render(<Task tasks={mockTasks} />);

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
    render(<Task tasks={mockTasks} />);
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

  it('should filter and display only incomplete tasks when "Concluidas" is selected', () => {
    render(<Task tasks={mockTasks} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'completed' } });
		expect(screen.getByText('Concluidas')).toBeInTheDocument();
		expectedTasksCompleted.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });
		expectedTasks.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });

  });
});
