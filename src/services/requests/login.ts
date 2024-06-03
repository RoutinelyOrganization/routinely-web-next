import type { HttpClient } from '@/services/contracts/httpClient';
import type { HttpResponse } from '@/services/contracts/httpResponse';
import type { Login } from '@/types/login';

export const login = async (httpClient: HttpClient, body: Login): Promise<HttpResponse> => {
  try {
    const response = await httpClient.request('/auth', {
      method: 'POST',
      body,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
