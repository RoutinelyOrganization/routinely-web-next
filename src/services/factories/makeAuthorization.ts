import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { authorization } from '@/services/requests/authorization';

export const makeAuthorization = (): Promise<HttpResponse> => {
  const { httpClient, token } = makeClientAndToken();
  const refreshToken = window.localStorage.getItem('refreshToken') || '';
  return authorization(httpClient, token, refreshToken);
};
