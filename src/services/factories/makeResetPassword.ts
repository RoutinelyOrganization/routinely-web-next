import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { resetPassword } from '@/services/requests/resetPassword';

export const makeResetPassword = (email: string): Promise<HttpResponse> => {
  const { httpClient, token } = makeClientAndToken();
  return resetPassword(httpClient, email, token);
};
