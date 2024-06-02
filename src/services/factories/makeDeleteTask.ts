import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { deleteTask } from '@/services/requests/deleteTask';

export const makeDeleteTask = (id: number): Promise<void> => {
  const { httpClient, token } = makeClientAndToken();
  return deleteTask(httpClient, id, token);
};
