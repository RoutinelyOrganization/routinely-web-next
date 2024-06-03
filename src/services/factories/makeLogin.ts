import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { login } from '@/services/requests/login';
import type { Login } from '@/types/login';

export const makeLogin = async (body: Login): Promise<HttpResponse> => {
  const { httpClient } = await makeClientAndToken();
  return login(httpClient, body);
};
