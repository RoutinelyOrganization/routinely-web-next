import type { HttpClient } from '@/services/contracts/httpClient';

export interface ChangePassword {
  password: string;
  code: string;
  accountId: string;
}

export const changePassword = (httpClient: HttpClient, body: ChangePassword, token: string) => {
  try {
    const response = httpClient.request('/auth/changepassword', {
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
