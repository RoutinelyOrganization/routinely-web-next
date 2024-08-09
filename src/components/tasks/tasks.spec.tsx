import { render, screen, fireEvent } from '@testing-library/react';
import { tasks } from '@mocks/taskMock';
import Task from '.';

const mockTasks = tasks;
describe('Task component', () => {
  //MUITO IMPORTANTE -> ESSES TESTES DEPENDEM EXCLUSIVAMENTE DO MOCK "TASK" QUE FICA NA PASTA MOCKS.
  //SE OS MOCKS FOREM ALTERADOS, PROVAVELMENTE OS TESTES IRÃO FALHAR. POR GENTILEZA VERIFIQUE SE OS MOCKS ESTÃO DE ACORDO COM OS TESTES.
  it('should render correctly with tasks', () => {
    render(<Task tasks={mockTasks} />);
    expect(screen.getByText('Todas as atividades')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 4')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 5')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 7')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 8')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 10')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 12')).toBeInTheDocument();
  });

  it('should filter and display only incomplete tasks when "Hábitos" is selected', () => {
    render(<Task tasks={mockTasks} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'habit' } });
    expect(screen.getByText('Todas as atividades')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 5')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 8')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 12')).toBeInTheDocument();
  });

  it('should filter and display only incomplete tasks when "Tarefas" is selected', () => {
    render(<Task tasks={mockTasks} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'task' } });
    expect(screen.getByText('Tarefa 4')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 7')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 10')).toBeInTheDocument();
  });

  it('should filter and display only incomplete tasks when "Concluidas" is selected', () => {
    render(<Task tasks={mockTasks} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'completed' } });
    expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 3')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 6')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 9')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 11')).toBeInTheDocument();
  });
});
