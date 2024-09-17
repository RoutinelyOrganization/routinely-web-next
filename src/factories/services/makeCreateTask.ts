import { createTask } from '@/services/requests/createTask';
import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import type { Task } from '@/types/task';
import { makeClientAndToken } from './makeClientAndToken';

export const makeCreateTask = async (body: Task, token: string): Promise<HttpResponse> => {
  const { httpClient } = await makeClientAndToken();
  return createTask(httpClient, body, token);
};
