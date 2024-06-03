import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { resetPassword } from '@/services/requests/resetPassword';

export const makeResetPassword = async (email: string): Promise<HttpResponse> => {
  const { httpClient, token } = await makeClientAndToken();
  return resetPassword(httpClient, email, token);
};
