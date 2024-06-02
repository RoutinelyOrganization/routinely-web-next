import type { HttpClient } from '../contracts/httpClient';
import type { HttpResponse } from '../contracts/httpResponse';

export const authorization = async (
  httpClient: HttpClient,
  token: string,
  refreshToken: string,
): Promise<HttpResponse> => {
  try {
    const response = await httpClient.request('/auth/refresh', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        refreshToken,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
