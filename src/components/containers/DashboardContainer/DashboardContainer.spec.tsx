import { typeTaskOptions } from '@/constants/typeTask';
import { TaskProvider } from '@/providers/taskProvider';
import { tasks } from '@mocks/taskMock';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import DashboardContainer from '.';

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  status: 200,
  json: () => Promise.resolve({ tasks }),
});

const DashboardContainerMock = async () => {
  return await act(async () => {
    render(
      <TaskProvider>
        <DashboardContainer />
      </TaskProvider>,
    );
  });
};

const mockTasks = tasks;
const expectedTasks = mockTasks.filter(task => !task.checked);
const expectedTasksHabit = mockTasks.filter(task => task.type === 'habit' && !task.checked);
const expectedTasksTask = mockTasks.filter(task => task.type === 'task' && !task.checked);
const expectedTasksCompleted = mockTasks.filter(task => task.checked);

type DateMockProps = {
  subtractDays?: number;
  addDays?: number;
};

const dateMock = ({ subtractDays, addDays }: DateMockProps = {}) => {
  const date = new Date();

  subtractDays && date.setDate(date.getDate() - subtractDays);
  addDays && date.setDate(date.getDate() + addDays);

  const weekDay = formatString(date.toLocaleDateString('pt-br', { weekday: 'long' }));
  const month = formatString(date.toLocaleDateString('pt-br', { month: 'long' }));

  return {
    day: date.getDate(),
    weekDay,
    month,
    year: date.getFullYear(),
  };
};

const formatString = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

describe('<DashboardContainer/>', () => {
  it('should render without session user', async () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });

    await DashboardContainerMock();

    const logo = screen.getByRole('img', { name: 'logo Routinely' });
    expect(logo).toBeInTheDocument();

    const iconNotification = screen.queryByAltText('notificações');
    expect(iconNotification).not.toBeInTheDocument();

    const iconMenu = screen.queryByAltText('abrir menu');
    expect(iconMenu).not.toBeInTheDocument();

    const heading = screen.getByRole('heading', {
      name: `${dateMock().weekDay}, ${dateMock().day} de ${dateMock().month} de ${dateMock().year}`,
    });
    expect(heading).toBeInTheDocument();

    const iconCalendar = screen.getByRole('img', { name: 'Calendário' });
    expect(iconCalendar).toBeInTheDocument();

    const iconPrev = screen.getByRole('img', { name: 'Icone para voltar' });
    expect(iconPrev).toBeInTheDocument();

    const iconNext = screen.getByRole('img', { name: 'Icone para avançar' });
    expect(iconNext).toBeInTheDocument();

    const iconAddNewTask = screen.getByRole('img', {
      name: 'icone para adicionar nova tarefa ou hábito',
    });
    expect(iconAddNewTask).toBeInTheDocument();

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveTextContent('Todas as atividades');
    expect(select).toHaveTextContent('Hábitos');
    expect(select).toHaveTextContent('Tarefas');
    expect(select).toHaveTextContent('Concluídas');
  });

  it('should render with session user', async () => {
    (useSession as jest.Mock).mockReturnValue({ data: { user: { token: 'mockedToken' } } });

    await DashboardContainerMock();

    const iconNotification = screen.getByAltText('notificações');
    expect(iconNotification).toBeInTheDocument();

    const iconMenu = screen.getByAltText('abrir menu');
    expect(iconMenu).toBeInTheDocument();
  });

  it('should render correctly with tasks', async () => {
    await DashboardContainerMock();

    const select = screen.getByRole('combobox');

    act(() => {
      fireEvent.change(select, { target: { value: 'all tasks' } });
    });

    expect(screen.getByText('Todas as atividades')).toBeInTheDocument();
    await waitFor(() => {
      expectedTasks.forEach(task => {
        expect(screen.getByText(task.name)).toBeInTheDocument();
      });

      expectedTasksCompleted.forEach(task => {
        expect(screen.queryByText(task.name)).not.toBeInTheDocument();
      });
    });
  });

  it('should filter and display only incomplete tasks when "Hábitos" is selected', async () => {
    await DashboardContainerMock();

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

  it('should filter and display only incomplete tasks when "Tarefas" is selected', async () => {
    await DashboardContainerMock();

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

  it('should render only completed tasks when "Concluidas" is selected', async () => {
    await DashboardContainerMock();
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'completed' } });
    expect(screen.getByText('Concluídas')).toBeInTheDocument();
    expectedTasksCompleted.forEach(task => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });
    expectedTasks.forEach(task => {
      expect(screen.queryByText(task.name)).not.toBeInTheDocument();
    });
  });

  it('should change display when task is checked', async () => {
    await DashboardContainerMock();

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

  it('should change title to prev date on clin in icon prev', async () => {
    await DashboardContainerMock();
    const [heading] = screen.getAllByRole('heading');
    const today = dateMock();
    expect(heading.textContent).toBe(
      `${today.weekDay}, ${today.day} de ${today.month} de ${today.year}`,
    );

    // should change week day and date
    const prevIcon = screen.getByRole('img', { name: 'Icone para voltar' });

    const prevDate = dateMock({ subtractDays: 1 });
    fireEvent.click(prevIcon);
    expect(heading.textContent).toBe(
      `${prevDate.weekDay}, ${prevDate.day} de ${prevDate.month} de ${prevDate.year}`,
    );

    // should change week day, date and month

    const prevMonth = dateMock({ subtractDays: today.day });

    for (let i = 1; i < today.day; i++) {
      fireEvent.click(prevIcon);
    }

    expect(heading.textContent).toBe(
      `${prevMonth.weekDay}, ${prevMonth.day} de ${prevMonth.month} de ${prevMonth.year}`,
    );
  });

  it('should change title to next date on clin in icon next', async () => {
    await DashboardContainerMock();
    const today = dateMock();

    const [heading] = screen.getAllByRole('heading');
    expect(heading.textContent).toBe(
      `${today.weekDay}, ${today.day} de ${today.month} de ${today.year}`,
    );
    const nextIcon = screen.getByRole('img', { name: 'Icone para avançar' });

    //should change week day and date
    const nextDay = dateMock({ addDays: 1 });
    fireEvent.click(nextIcon);
    expect(heading.textContent).toBe(
      `${nextDay.weekDay}, ${nextDay.day} de ${nextDay.month} de ${nextDay.year}`,
    );

    // should change week day, date and month
    const nextMonth = dateMock({ addDays: today.day });
    for (let i = 1; i < today.day; i++) {
      fireEvent.click(nextIcon);
    }
    expect(heading.textContent).toBe(
      `${nextMonth.weekDay}, ${nextMonth.day} de ${nextMonth.month} de ${nextMonth.year}`,
    );
  });

  it(`should open a small modal showing the task types when clicking the "add task" icon`, async () => {
    await DashboardContainerMock();
    const addTaskIcon = screen.getByRole('img', {
      name: 'icone para adicionar nova tarefa ou hábito',
    });

    fireEvent.click(addTaskIcon);
    const modal = screen.getByTestId('container-type-task');

    const typesTasks = modal.getElementsByTagName('p');

    expect(modal).toBeInTheDocument();
    expect(typesTasks).toHaveLength(2);
    expect(typesTasks[0]).toHaveTextContent('Tarefa');
    expect(typesTasks[1]).toHaveTextContent('Hábito');
  });

  it(`should open modal form to add new task when clicking the "add task" icon type task`, async () => {
    await DashboardContainerMock();

    const addTaskIcon = screen.getByRole('img', {
      name: 'icone para adicionar nova tarefa ou hábito',
    });

    fireEvent.click(addTaskIcon);
    const modal = screen.getByTestId('container-type-task');

    const [typeTask] = modal.getElementsByTagName('p');

    fireEvent.click(typeTask);
    const form = screen.getByRole('form');

    const title = form.getElementsByTagName('h1');
    expect(title).toHaveLength(1);
    expect(title[0]).toHaveTextContent('Adicionar Tarefa');

    const iconInfo = form.querySelector('img[alt="icone de exclamação"]');
    const iconClose = form.querySelector('img[alt="fechar formulario"]');
    expect(iconInfo).toBeInTheDocument();
    expect(iconClose).toBeInTheDocument();

    const infoSpan = Array.from(form.querySelectorAll('span'));
    const spanInDocument = infoSpan.find(
      span => span.textContent === typeTaskOptions[0].description,
    );
    expect(spanInDocument).toBeInTheDocument();

    const inputs = form.getElementsByTagName('input');
    const textarea = form.getElementsByTagName('textarea');
    const select = form.getElementsByTagName('select');

    expect(inputs).toHaveLength(3);
    expect(textarea).toHaveLength(1);
    expect(select).toHaveLength(1);

    const weekFrequency = form.getElementsByTagName('p');
    expect(weekFrequency).toHaveLength(1);
    expect(weekFrequency[0]).toHaveTextContent('Frequência semanal');

    const openOptinalFields = form.querySelector('img[alt="Abrir campos de frequencia semanal"]');
    expect(openOptinalFields).toBeInTheDocument();

    fireEvent.click(openOptinalFields!);

    const paragraphQuantityPerWeek = screen.getByTestId('quantityPerWeek');
    expect(paragraphQuantityPerWeek).toBeInTheDocument();
    const inputQuantityPerWeek = screen.getByPlaceholderText('0');
    expect(inputQuantityPerWeek).toBeInTheDocument();

    const weekDaysContainer = screen.getByTestId('weekDaysCheckBox');
    const checkboxes = weekDaysContainer.querySelectorAll('input[type="checkbox"]');

    expect(checkboxes).toHaveLength(7);

    const button = form.getElementsByTagName('button');
    expect(button).toHaveLength(1);
    expect(button[0]).toHaveTextContent('Salvar Alterações');

    fireEvent.click(iconClose as HTMLImageElement);
    expect(form).not.toBeInTheDocument();
  });

  it("Should render form to update task when clicking the 'edit task' icon", async () => {
    await DashboardContainerMock();
    const [editTaskIcon] = screen.getAllByRole('img', {
      name: 'Icone de editar',
    });

    const [firstTask] = expectedTasks;
    const typeFirstTask = firstTask.type === 'task' ? 'Tarefa' : 'Hábito';

    fireEvent.click(editTaskIcon);

    const form = screen.getByRole('form');

    const title = form.getElementsByTagName('h1');
    expect(title).toHaveLength(1);
    expect(title[0]).toHaveTextContent(`Editar ${typeFirstTask}`);

    const buttons = form.getElementsByTagName('button');
    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent('Excluir');
    expect(buttons[1]).toHaveTextContent('Duplicar');
    expect(buttons[2]).toHaveTextContent('Salvar Alterações');
  });
});
