'use client';

import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { createContext, useEffect, useState } from 'react';

interface ICalendarProps {
  children: React.ReactNode;
}

dayjs.locale('pt-br');
interface ICalendarContext {
  date: Dayjs;
  setDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  nameMonth: string;
  weekDay: string;
  day: number;
  month: number;
  year: number;
}
export const CalendarContext = createContext<ICalendarContext>({} as ICalendarContext);
CalendarContext.displayName = 'calendar context';

export const CalendarProvider: React.FC<ICalendarProps> = ({ children }) => {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [day, setDay] = useState(0);
  const [weekDay, setWeekDay] = useState('');
  const [nameMonth, setNameMonth] = useState('');

  useEffect(() => {
    const nameWeekDay = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ];
    const namesMonths = [
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

    setDay(date.date());
    setMonth(date.month() + 1);
    setYear(date.year());
    setWeekDay(nameWeekDay[date.day()]);
    setNameMonth(namesMonths[date.month()]);
  }, [date]);

  return (
    <CalendarContext.Provider
      value={{
        month,
        year,
        day,
        weekDay,
        nameMonth,
        date,
        setDate,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
