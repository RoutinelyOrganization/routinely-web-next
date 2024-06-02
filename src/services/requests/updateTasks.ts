import type { HttpClient } from '@/services/contracts/httpClient';
import type { HttpResponse } from '@/services/contracts/httpResponse';
import type { Task } from '@/types/task';

export const updateTask = async (
  httpClient: HttpClient,
  id: number,
  body: Partial<Task>,
  token: string,
): Promise<HttpResponse> => {
  try {
    const response = await httpClient.request(`/tasks/${id}`, {
      method: 'PUT',
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
