import { Categories } from '@/types/categories';
import type { Task } from '@/types/task';
import { stringToDate } from '@/utils/formats/stringToDate';

const dateNow = new Date();
const {
  longDateString: dateNowStr,
  day,
  month,
  year,
} = stringToDate(`${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`);

const dateTomorrow = new Date(year, month - 1, day + 1);
const dateNextMonth = new Date(year, month, 1);

const { longDateString: dateTomorrowStr } = stringToDate(
  `${dateTomorrow.getFullYear()}-${dateTomorrow.getMonth() + 1}-${dateTomorrow.getDate()}`,
);
const { longDateString: dateNextMonthStr } = stringToDate(
  `${dateNextMonth.getFullYear()}-${dateNextMonth.getMonth() + 1}-${dateNextMonth.getDate()}`,
);

export const tasks: Task[] = [
  {
    type: 'task',
    id: '1',
    name: 'Tarefa 1',
    checked: false,
    category: Categories.Career,
    date: dateNowStr,
    description: 'teste',
    finallyDate: '2025-11-01 10:00',
    weekDays: ['Monday', 'Friday'],
  },
  {
    type: 'habit',
    id: '2',
    name: 'Tarefa 2',
    checked: false,
    category: Categories.Studies,
    date: dateNowStr,
    description: 'teste',
    finallyDate: '2024-11-01 10:00',
    weekDays: ['Monday', 'Friday'],
  },
  {
    type: 'habit',
    id: '3',
    name: 'Tarefa 3',
    checked: false,
    category: Categories.Career,
    date: dateTomorrowStr,
    description: 'teste',
    finallyDate: dateNextMonthStr,
    weekDays: ['Monday', 'Friday'],
  },
  {
    type: 'task',
    id: '4',
    name: 'Tarefa 4',
    checked: false,
    category: Categories.Studies,
    date: dateTomorrowStr,
    description: 'teste',
    finallyDate: dateNextMonthStr,
    weekDays: ['Monday', 'Friday'],
  },
  {
    type: 'task',
    id: '5',
    name: 'Tarefa 5',
    checked: true,
    category: Categories.Studies,
    date: dateNowStr,
    description: 'teste',
    finallyDate: '2024-11-01 10:00',
    weekDays: ['Monday', 'Wednesday'],
  },
];
