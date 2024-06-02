import type { HttpResponse } from '@/services/contracts/httpResponse';
import { createTask } from '@/services/requests/createTask';
import type { Task } from '@/types/task';
import { makeClientAndToken } from './makeClientAndToken';

export const makeCreateTask = (body: Task): Promise<HttpResponse> => {
  const { httpClient, token } = makeClientAndToken();
  return createTask(httpClient, body, token);
};
