import { Categories } from '@/types/categories';
import type { Task } from '@/types/task';

export const tasks: Task[] = [
  {
    type: 'task',
    id: '1',
    name: 'Tarefa 1',
    checked: false,
    category: Categories.Career,
    date: '2025-10-01 10:00',
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
    date: '2024-10-01 10:00',
    description: 'teste',
    finallyDate: '2024-11-01 10:00',
    weekDays: ['Monday', 'Friday'],
  },
  {
    type: 'habit',
    id: '3',
    name: 'Tarefa 3',
    checked: true,
    category: Categories.Career,
    date: '2024-10-01 10:00',
    description: 'teste',
    finallyDate: '2024-11-01 10:00',
    weekDays: ['Monday', 'Friday'],
  },
  {
    type: 'task',
    id: '4',
    name: 'Tarefa 4',
    checked: false,
    category: Categories.Studies,
    date: '2024-10-01 10:00',
    description: 'teste',
    finallyDate: '2024-11-01 10:00',
    weekDays: ['Monday', 'Friday'],
  },
];
