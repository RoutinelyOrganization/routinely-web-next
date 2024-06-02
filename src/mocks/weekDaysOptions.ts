import type { DaysOfWeek } from '@/types/weekDays';

export interface IWeekDayMock {
  id: number;
  name: DaysOfWeek;
  checked: boolean;
  shortName: string;
}

export const weekDaysOptions: IWeekDayMock[] = [
  {
    id: 0,
    name: 'Sunday',
    checked: true,
    shortName: 'D',
  },
  {
    id: 1,
    name: 'Monday',
    checked: false,
    shortName: 'S',
  },
  {
    id: 2,
    name: 'Tuesday',
    checked: false,
    shortName: 'T',
  },
  {
    id: 3,
    name: 'Wednesday',
    checked: false,
    shortName: 'Q',
  },
  {
    id: 4,
    name: 'Thursday',
    checked: false,
    shortName: 'Q',
  },
  {
    id: 5,
    name: 'Friday',
    checked: false,
    shortName: 'S',
  },
  {
    id: 6,
    name: 'Saturday',
    checked: false,
    shortName: 'S',
  },
];
