import { makeClientAndToken } from '@/factories/services/makeClientAndToken';
import { updateTask } from '@/services/requests/updateTasks';
import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import type { Task } from '@/types/task';

export const makeUpdateTask = async (body: Partial<Task>, token: string): Promise<HttpResponse> => {
  const { httpClient } = await makeClientAndToken();

  return updateTask(httpClient, body, token);
};
