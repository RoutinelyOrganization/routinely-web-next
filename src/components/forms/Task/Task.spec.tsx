import { categories } from '@/constants/categories';
import { typeTaskOptions } from '@/constants/typeTask';
import type { DaysOfWeek } from '@/types/weekDays';
import { tasks } from '@mocks/taskMock';
import { useTaskMock } from '@mocks/useTaskContextMock';
import { act, fireEvent, render, screen } from '@testing-library/react';
import TaskForm from '.';

beforeEach(() => {
  useTaskMock.mockClear();
});

describe('<TaskForm/>', () => {
  it('should render title and fields required', () => {
    useTaskMock.mockReturnValue({
      selectedTypeTask: typeTaskOptions[0],
    });
    render(<TaskForm />);

    const heading = screen.getByRole('heading');
    const iconInfo = screen.getByRole('img', { name: 'icone de exclamação' });
    const iconClose = screen.getByRole('img', { name: 'fechar formulario' });
    const inputs = screen.getAllByRole('textbox');
    const select = screen.getByRole('combobox');
    const paragraphOpenOptinalFields = screen.getByText('Frequencia semanal');
    const iconeOpenOptinalFields = screen.getByRole('img', {
      name: 'Abrir campos de frequencia semanal',
    });
    const button = screen.getByRole('button', { name: 'Salvar Alterações' });

    expect(heading).toHaveTextContent(`Adicionar ${typeTaskOptions[0].name}`);
    expect(iconInfo).toBeInTheDocument();
    expect(iconClose).toBeInTheDocument();
    expect(inputs).toHaveLength(4);
    expect(select).toBeInTheDocument();
    expect(paragraphOpenOptinalFields).toBeInTheDocument();
    expect(iconeOpenOptinalFields).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should render fields optional', async () => {
    render(<TaskForm />);
    const iconeOpenOptinalFields = screen.getByRole('img', {
      name: 'Abrir campos de frequencia semanal',
    });

    // dispara o evento de click no icone para abrir os campos opcionais
    fireEvent.click(iconeOpenOptinalFields);

    // verifica se o paragrafo de quantidade por semana aparece
    const paragraphQuantityPerWeek = screen.getByTestId('quantityPerWeek');
    const input = screen.getByPlaceholderText('0');

    expect(paragraphQuantityPerWeek).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    //verifica se todos os checkboxes de dias da semana aparecem
    const weekDaysContainer = screen.getByTestId('weekDaysCheckBox');
    const checkboxes = weekDaysContainer.querySelectorAll('input[type="checkbox"]');

    expect(checkboxes).toHaveLength(7);

    // verifica se o campo de finaliza em aparece
    const finallyDate = screen.getByText('Finaliza em:');
    expect(finallyDate).toBeInTheDocument();
  });

  it('should render error message for required fields', async () => {
    render(<TaskForm />);
    const button = screen.getByRole('button', { name: 'Salvar Alterações' });
    fireEvent.click(button);

    expect(await screen.findByText('O campo titulo é obrigatório')).toBeInTheDocument();
    expect(await screen.findByText('O campo data é obrigatório')).toBeInTheDocument();
    expect(await screen.findByText('O campo Hora é obrigatório')).toBeInTheDocument();
    expect(await screen.findByText('O campo categoria é obrigatório')).toBeInTheDocument();
    expect(await screen.findByText('O campo descricão é obrigatório')).toBeInTheDocument();
  });

  it('should render error message for max length in title', async () => {
    render(<TaskForm />);
    const inputTitle = screen.getAllByRole('textbox')[0];

    fireEvent.change(inputTitle, { target: { value: 'a'.repeat(51) } });

    expect(await screen.findByText('Quantidade de caracteres máximo, 50!')).toBeInTheDocument();
  });

  it('should render error message for past date', async () => {
    render(<TaskForm />);
    const [inputTitle, inputDate, inputHour, inputDescription] = screen.getAllByRole('textbox');
    const select = screen.getByRole('combobox');

    await act(async () => {
      fireEvent.change(inputTitle, { target: { value: 'teste' } });
      fireEvent.change(inputDate, { target: { value: '2022-01-01' } });
      fireEvent.change(inputHour, { target: { value: '10:00' } });
      fireEvent.change(select, { target: { value: categories[0] } });
      fireEvent.change(inputDescription, { target: { value: 'teste' } });
      fireEvent.click(screen.getByRole('button', { name: 'Salvar Alterações' }));
    });

    expect(await screen.findByText('Data menor que a data atual')).toBeInTheDocument();
  });

  it('should render error message for invalid description', async () => {
    render(<TaskForm />);
    const inputDescription = screen.getAllByRole('textbox')[3];
    fireEvent.change(inputDescription, { target: { value: 'a'.repeat(1001) } });

    expect(await screen.findByText('Quantidade máxima de caracteres, 1000!')).toBeInTheDocument();
  });

  it('should render error message for invalid quantity per week', async () => {
    render(<TaskForm />);

    const iconeOpenOptinalFields = screen.getByRole('img', {
      name: 'Abrir campos de frequencia semanal',
    });
    fireEvent.click(iconeOpenOptinalFields);
    const input = screen.getByPlaceholderText('0');

    fireEvent.change(input, { target: { value: 'a' } });

    expect(await screen.findByText('Apenas numeros positivos')).toBeInTheDocument();
  });

  it('should update correct chekboxes', async () => {
    render(<TaskForm />);

    // dispara o evento de click no icone para abrir os campos opcionais
    const iconeOpenOptinalFields = screen.getByRole('img', {
      name: 'Abrir campos de frequencia semanal',
    });
    fireEvent.click(iconeOpenOptinalFields);

    // busca todos os checkboxes de dias da semana e dispara os eventos de click
    const weekDaysContainer = screen.getByTestId('weekDaysCheckBox');
    const checkboxes = weekDaysContainer.querySelectorAll('input[type="checkbox"]');

    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[3]);
    fireEvent.click(checkboxes[5]);

    // verifica se os checkboxes foram alterados
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
    expect(checkboxes[3]).toBeChecked();
    expect(checkboxes[4]).not.toBeChecked();
    expect(checkboxes[5]).toBeChecked();
    expect(checkboxes[6]).not.toBeChecked();
  });

  it('should render branch update task', () => {
    useTaskMock.mockReturnValue({
      selectedTypeTask: typeTaskOptions[0],
      selectedTask: tasks[0],
    });
    render(<TaskForm />);

    // dispara o evento de click no icone para abrir os campos opcionais
    const iconeOpenOptinalFields = screen.getByRole('img', {
      name: 'Abrir campos de frequencia semanal',
    });
    fireEvent.click(iconeOpenOptinalFields);

    const heading = screen.getByRole('heading');
    const select = screen.getByRole('combobox');

    // busca todos os checkboxes de dias da semana e dispara os eventos de click
    const weekDaysContainer = screen.getByTestId('weekDaysCheckBox');
    const checkboxes = weekDaysContainer.querySelectorAll('input[type="checkbox"]');

    expect(heading).toHaveTextContent(`Editar ${typeTaskOptions[0].name}`);
    expect(select).toHaveValue(tasks[0].category);

    for (const checkbox of checkboxes) {
      if (tasks[0].weekDays.includes(checkbox.getAttribute('name') as DaysOfWeek)) {
        expect(checkbox).toBeChecked();
      } else {
        expect(checkbox).not.toBeChecked();
      }
    }
  });

  it('should setFormIsOpen on close', () => {
    useTaskMock.mockReturnValue({
      setFormIsOpen: jest.fn(),
    });
    render(<TaskForm />);
    const iconClose = screen.getByRole('img', { name: 'fechar formulario' });

    fireEvent.click(iconClose);

    expect(useTaskMock().setFormIsOpen).toHaveBeenCalledWith(false);
  });

  it('should submit create task', async () => {
    useTaskMock.mockReturnValue({
      setActionForm: jest.fn(),
    });
    render(<TaskForm />);

    const button = screen.getByRole('button', { name: 'Salvar Alterações' });
    const [inputTitle, inputDate, inputHour, inputDescription] = screen.getAllByRole('textbox');
    const select = screen.getByRole('combobox');

    await act(async () => {
      fireEvent.change(inputTitle, { target: { value: 'teste' } });
      fireEvent.change(inputDate, { target: { value: '2025-01-01' } });
      fireEvent.change(inputHour, { target: { value: '10:00' } });
      fireEvent.change(inputDescription, { target: { value: 'teste' } });
      fireEvent.change(select, { target: { value: categories[0] } });
      fireEvent.click(button);
    });

    expect(useTaskMock().setActionForm).toHaveBeenCalledWith('create');
  });

  it('should submit update task', async () => {
    useTaskMock.mockReturnValue({
      setActionForm: jest.fn(),
      selectedTask: tasks[0],
    });
    render(<TaskForm />);

    const button = screen.getByRole('button', { name: 'Salvar Alterações' });
    await act(async () => {
      fireEvent.click(button);
    });

    expect(useTaskMock().setActionForm).toHaveBeenCalledWith('update');
  });

  it('should submit delete task', async () => {
    useTaskMock.mockReturnValue({
      setActionForm: jest.fn(),
      selectedTask: tasks[0],
    });
    render(<TaskForm />);

    const button = screen.getByRole('button', { name: 'Excluir' });
    await act(async () => {
      fireEvent.click(button);
    });

    expect(useTaskMock().setActionForm).toHaveBeenCalledWith('delete');
  });

  it('should submit duplicate task', async () => {
    useTaskMock.mockReturnValue({
      setActionForm: jest.fn(),
      selectedTask: tasks[0],
    });
    render(<TaskForm />);

    const button = screen.getByRole('button', { name: 'Duplicar' });
    await act(async () => {
      fireEvent.click(button);
    });

    expect(useTaskMock().setActionForm).toHaveBeenCalledWith('create');
  });
});
