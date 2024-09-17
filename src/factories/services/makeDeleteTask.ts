import { makeClientAndToken } from '@/factories/services/makeClientAndToken';
import { deleteTask } from '@/services/requests/deleteTask';

export const makeDeleteTask = async (id: string, token: string): Promise<void> => {
  const { httpClient } = await makeClientAndToken();
  return deleteTask(httpClient, id, token);
};
