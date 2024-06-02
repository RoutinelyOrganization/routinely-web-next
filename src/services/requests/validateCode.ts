import type { HttpClient } from '@/services/contracts/httpClient';
import type { ChangePassword } from '@/services/requests/changePassword';

export interface ValidateCode extends Omit<ChangePassword, 'password'> {}

export const validateCode = (httpClient: HttpClient, body: ValidateCode, token: string) => {
  try {
    const response = httpClient.request('/auth/validatecode', {
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
