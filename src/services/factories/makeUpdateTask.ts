import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { updateTask } from '@/services/requests/updateTasks';
import type { Task } from '@/types/task';

export const makeUpdateTask = (id: number, body: Partial<Task>): Promise<HttpResponse> => {
  const { httpClient, token } = makeClientAndToken();
  return updateTask(httpClient, id, body, token);
};
