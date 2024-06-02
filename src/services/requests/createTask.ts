import type { HttpClient } from '@/services/contracts/httpClient';
import type { HttpResponse } from '@/services/contracts/httpResponse';
import type { Task } from '@/types/task';

export const createTask = async (
  httpClient: HttpClient,
  body: Task,
  token: string,
): Promise<HttpResponse> => {
  try {
    const response = await httpClient.request('/tasks', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
