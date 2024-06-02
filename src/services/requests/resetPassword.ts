import type { HttpClient } from '@/services/contracts/httpClient';
import type { HttpResponse } from '@/services/contracts/httpResponse';

export const resetPassword = (
  httpClient: HttpClient,
  email: string,
  token: string,
): Promise<HttpResponse> => {
  try {
    const response = httpClient.request('/auth/resetpassword', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        email,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
