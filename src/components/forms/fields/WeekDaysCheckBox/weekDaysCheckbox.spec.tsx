import type { DaysOfWeek } from '@/types/weekDays';
import { tasks } from '@mocks/taskMock';
import { fireEvent, render, screen } from '@testing-library/react';
import WeekDaysChekbox from '.';

describe('<WeekDaysChekbox/>', () => {
  it('should render', () => {
    render(<WeekDaysChekbox />);

    // busca todos os checkboxes de dias da semana e dispara os eventos de click
    const weekDaysContainer = screen.getByTestId('weekDaysCheckBox');
    const checkboxes = weekDaysContainer.querySelectorAll('input[type="checkbox"]');

    // verifica se os checkboxes foram alterados
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
    expect(checkboxes[3]).not.toBeChecked();
    expect(checkboxes[4]).not.toBeChecked();
    expect(checkboxes[5]).not.toBeChecked();
    expect(checkboxes[6]).not.toBeChecked();
  });

  it('should render with props', () => {
    render(<WeekDaysChekbox weekDays={tasks[0].weekDays} />);

    const weekDaysContainer = screen.getByTestId('weekDaysCheckBox');
    const checkboxes = weekDaysContainer.querySelectorAll('input[type="checkbox"]');

    for (const checkbox of checkboxes) {
      if (tasks[0].weekDays.includes(checkbox.getAttribute('name') as DaysOfWeek)) {
        expect(checkbox).toBeChecked();
      } else {
        expect(checkbox).not.toBeChecked();
      }
    }
  });

  it('should update the state when the checkbox is clicked', () => {
    render(<WeekDaysChekbox />);

    const weekDaysContainer = screen.getByTestId('weekDaysCheckBox');
    const checkboxes = weekDaysContainer.querySelectorAll('input[type="checkbox"]');

    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[3]);
    fireEvent.click(checkboxes[5]);

    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
    expect(checkboxes[3]).toBeChecked();
    expect(checkboxes[4]).not.toBeChecked();
    expect(checkboxes[5]).toBeChecked();
    expect(checkboxes[6]).not.toBeChecked();

    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[3]);

    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[3]).not.toBeChecked();
  });

  it('should return correct values', () => {
    const setWeekDays = jest.fn();
    render(<WeekDaysChekbox setWeekDays={setWeekDays} />);
    const weekDaysContainer = screen.getByTestId('weekDaysCheckBox');
    const checkboxes = weekDaysContainer.querySelectorAll('input[type="checkbox"]');

    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[3]);
    fireEvent.click(checkboxes[5]);

    expect(setWeekDays).toHaveBeenCalledTimes(3);
    expect(setWeekDays).toHaveBeenCalledWith(['Sunday', 'Wednesday', 'Friday']);
  });

  it('should macth snapshot', () => {
    const { container } = render(<WeekDaysChekbox />);

    expect(container).toMatchSnapshot();
  });
});
