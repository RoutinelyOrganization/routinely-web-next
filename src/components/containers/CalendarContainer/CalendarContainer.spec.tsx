import { CalendarProvider } from '@/providers/calendarProvider';
import { fireEvent, render, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import React from 'react';
import CalendarContainer from '.';

const today = dayjs();

const weekDay = (index: number): string => {
  const weekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  return weekDays[index];
};

const monthName = (index: number): string => {
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return monthNames[index];
};

describe('<CalendarContainer/>', () => {
  it('should render', () => {
    render(
      <CalendarProvider>
        <CalendarContainer />
      </CalendarProvider>,
    );
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toBe(
      `${weekDay(today.day())}, ${today.date()} de ${monthName(today.month())} de ${today.year()}`,
    );

    const [iconCalendar, iconPrev, iconNext] = screen.getAllByRole('img');
    expect(iconCalendar).toHaveAttribute('alt', 'Calendário');
    expect(iconPrev).toHaveAttribute('alt', 'Icone para voltar');
    expect(iconNext).toHaveAttribute('alt', 'Icone para avançar');
  });

  it('should change title to prev date on clin in icon prev', () => {
    render(
      <CalendarProvider>
        <CalendarContainer />
      </CalendarProvider>,
    );
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toBe(
      `${weekDay(today.day())}, ${today.date()} de ${monthName(today.month())} de ${today.year()}`,
    );
    const prevIcon = screen.getByRole('img', { name: 'Icone para voltar' });

    // should change week day and date

    const prevDay = today.subtract(1, 'day');
    fireEvent.click(prevIcon);
    expect(heading.textContent).toBe(
      `${weekDay(prevDay.day())}, ${prevDay.date()} de ${monthName(prevDay.month())} de ${today.year()}`,
    );

    // should change week day, date and month
    for (let i = 1; i < today.date(); i++) {
      fireEvent.click(prevIcon);
    }
    const prevMonth = today.subtract(today.date(), 'day');

    expect(heading.textContent).toBe(
      `${weekDay(prevMonth.day())}, ${prevMonth.date()} de ${monthName(prevMonth.month())} de ${today.year()}`,
    );
  });

  it('should change title to next date on clin in icon next', () => {
    render(
      <CalendarProvider>
        <CalendarContainer />
      </CalendarProvider>,
    );
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toBe(
      `${weekDay(today.day())}, ${today.date()} de ${monthName(today.month())} de ${today.year()}`,
    );
    const nextIcon = screen.getByRole('img', { name: 'Icone para avançar' });

    //should change week day and date
    const nextDay = today.add(1, 'day');
    fireEvent.click(nextIcon);
    expect(heading.textContent).toBe(
      `${weekDay(nextDay.day())}, ${nextDay.date()} de ${monthName(nextDay.month())} de ${today.year()}`,
    );

    // should change week day, date and month
    const maxNumberOfClick = 31 - today.date();
    for (let i = 1; i < maxNumberOfClick; i++) {
      fireEvent.click(nextIcon);
    }
    const nextMonth = today.add(maxNumberOfClick, 'day');
    expect(heading.textContent).toBe(
      `${weekDay(nextMonth.day())}, ${nextMonth.date()} de ${monthName(nextMonth.month())} de ${today.year()}`,
    );
  });

  it('should change visible calendar', async () => {
    const setOpenCalendar = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation((init?: boolean) => [init, setOpenCalendar]);

    render(
      <CalendarProvider>
        <CalendarContainer />
      </CalendarProvider>,
    );

    const icon = screen.getByAltText('Calendário');
    fireEvent.click(icon);

    expect(setOpenCalendar).toHaveBeenCalledWith(true);
  });
});
