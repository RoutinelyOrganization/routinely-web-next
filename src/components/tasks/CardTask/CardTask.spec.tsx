import { typeTaskOptions } from '@/constants/typeTask';
import type { Task } from '@/types/task';
import type { TypeTask } from '@/types/typeTasks';
import { tasks } from '@mocks/taskMock';
import { useTaskMock } from '@mocks/useTaskContextMock';
import { fireEvent, render, screen } from '@testing-library/react';
import CardTask from '.';

jest.mock('@/hooks/useTask', () => ({
  useTask: () => useTaskMock(),
}));

const onChangeMock = jest.fn();
const taskTypeTask = tasks.find(task => task.type === 'task') as Task;
const taskTypeHabit = tasks.find(task => task.type === 'habit') as Task;

const titleCard = (type: Task['type']): Pick<TypeTask, 'name' | 'icon'> => {
  const typeTaskOption = typeTaskOptions.find(item => item.type === type);
  const { name, icon } = typeTaskOption as TypeTask;

  return {
    name,
    icon,
  };
};

describe('CardTask Component', () => {
  it('Should render with type tadk', () => {
    render(<CardTask task={taskTypeTask} onChangeCheck={onChangeMock} />);
    const { name, icon } = titleCard(taskTypeTask.type);

    const title = screen.getByRole('heading', { name: `${icon} ${name}` });
    expect(title).toBeInTheDocument();

    const description = screen.getByText(taskTypeTask.name);
    expect(description).toBeInTheDocument();

    const checkbox = screen.getByLabelText('checkbox');
    expect(checkbox).toBeInTheDocument();

    const tag = screen.getByText(taskTypeTask.category);
    expect(tag).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const iconEdit = button.querySelector('img[alt="Icone de editar"]');
    expect(iconEdit).toBeInTheDocument();
  });

  it('Should render with type habit', () => {
    render(<CardTask task={taskTypeHabit} onChangeCheck={onChangeMock} />);
    const { name, icon } = titleCard(taskTypeHabit.type);

    const title = screen.getByRole('heading', { name: `${icon} ${name}` });
    expect(title).toBeInTheDocument();
  });

  it('Should formated long name task or habit', () => {
    taskTypeHabit.name = taskTypeHabit.name.repeat(20);
    const nameFormated =
      taskTypeHabit.name.length > 91 ? taskTypeHabit.name.slice(0, 90) + '...' : taskTypeHabit.name;

    render(<CardTask task={taskTypeHabit} onChangeCheck={onChangeMock} />);

    const description = screen.getByText(nameFormated);
    expect(description).toBeInTheDocument();
  });

  it('Should call function onChangeCheck', () => {
    render(<CardTask task={taskTypeTask} onChangeCheck={onChangeMock} />);
    const checkbox = screen.getByLabelText('checkbox');
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalled();
  });

  it('Should call function when click on edit button', () => {
    render(<CardTask task={taskTypeHabit} onChangeCheck={onChangeMock} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(useTaskMock().setSelectedTask).toHaveBeenCalledWith(taskTypeHabit);
    expect(useTaskMock().setFormIsOpen).toHaveBeenCalledWith(true);
    expect(useTaskMock().setSelectedTypeTask).toHaveBeenCalledWith(taskTypeHabit.type);
  });

  it('Should match snapshot', () => {
    render(<CardTask task={taskTypeTask} onChangeCheck={onChangeMock} />);
    expect(screen).toMatchSnapshot();
  });
});
