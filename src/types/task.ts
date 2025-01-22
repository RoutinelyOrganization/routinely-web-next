import type { Categories } from './categories';
import type { TypeTask } from './typeTasks';
import type { WeekDays } from './weekDays';

export interface Task extends Pick<TypeTask, 'type'>, WeekDays {
  id: string;
  name: string;
  date: string;
  category: Categories;
  description: string;
  finallyDate: string;
  checked: boolean;
}
