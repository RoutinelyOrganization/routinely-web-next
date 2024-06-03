import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { changePassword, type ChangePassword } from '@/services/requests/changePassword';

export const makeChangePassword = async (body: ChangePassword): Promise<HttpResponse> => {
  const { httpClient, token } = await makeClientAndToken();
  return changePassword(httpClient, body, token);
};
