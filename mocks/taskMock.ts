import { Categories } from '@/types/categories';
import type { Task } from '@/types/task';
import { stringToDate } from '@/utils/formats/stringToDate';

const { longDateString: dateNowStr, day, month, year } = stringToDate();

const dateTomorrow = stringToDate(`${year}-${month}-${day + 1}`);
const dateNextMonth = stringToDate(`${year}-${month + 1}-${day + 1}`);

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
    date: dateTomorrow.longDateString,
    description: 'teste',
    finallyDate: dateNextMonth.longDateString,
    weekDays: ['Monday', 'Friday'],
  },
  {
    type: 'task',
    id: '4',
    name: 'Tarefa 4',
    checked: false,
    category: Categories.Studies,
    date: dateTomorrow.longDateString,
    description: 'teste',
    finallyDate: dateNextMonth.longDateString,
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
