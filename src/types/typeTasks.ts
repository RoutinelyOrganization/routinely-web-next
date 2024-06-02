export interface TypeTask {
  type: 'habit' | 'task';
  name: string;
  description: string;
  icon?: string;
}
