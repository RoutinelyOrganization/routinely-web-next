'use client';

import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { createContext } from 'react';

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
