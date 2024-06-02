import type { TypeTask } from '@/types/typeTasks';

export const typeTaskOptions: TypeTask[] = [
  {
    type: 'task',
    name: 'Tarefa',
    description:
      'São atividades específicas que precisamos realizar, geralmente de curta duração e com um objetivo claro.',
    icon: '📋',
  },
  {
    type: 'habit',
    name: 'Hábito',
    description:
      'São comportamentos que repetimos regularmente, quase automaticamente, formando padrões em nossa rotina diária.',
    icon: '📌',
  },
];
