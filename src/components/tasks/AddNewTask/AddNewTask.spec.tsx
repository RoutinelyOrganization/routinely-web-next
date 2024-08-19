import { typeTaskOptions } from '@/constants/typeTask';
import { TaskProvider } from '@/providers/taskProvider';
import { useTaskMock } from '@mocks/useTaskContextMock';
import { fireEvent, render, screen } from '@testing-library/react';
import AddNewTask from '.';

jest.mock('@/hooks/useTask', () => ({ useTask: useTaskMock }));

const AddNewTaskMock = () => (
  <TaskProvider>
    <AddNewTask />
  </TaskProvider>
);

describe('AddNewTask Component', () => {
  it('should render', () => {
    render(<AddNewTaskMock />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const iconAdd = button.querySelector('img[alt="Adicionar atividade"]');
    expect(iconAdd).toBeInTheDocument();

    const options = screen.queryAllByRole('paragraph');
    expect(options).toHaveLength(0);
  });

  it('should render modal with options when clicked on the button', () => {
    render(<AddNewTaskMock />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    const options = screen.getAllByRole('paragraph');
    expect(options).toHaveLength(typeTaskOptions.length);

    typeTaskOptions.forEach((option, index) => {
      expect(options[index]).toHaveTextContent(option.name);
    });
  });

  it('should close modal when clicked on the option', () => {
    render(<AddNewTaskMock />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const options = screen.getAllByRole('paragraph');

    fireEvent.click(options[0]);

    options.forEach(option => {
      expect(option).not.toBeInTheDocument();
    });
  });
});
