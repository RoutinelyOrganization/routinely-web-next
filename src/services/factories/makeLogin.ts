import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { login } from '@/services/requests/login';
import type { Login } from '@/types/login';

export const makeLogin = (body: Login): Promise<HttpResponse> => {
  const { httpClient } = makeClientAndToken();
  return login(httpClient, body);
};
