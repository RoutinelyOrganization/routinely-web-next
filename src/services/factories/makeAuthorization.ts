import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { authorization } from '@/services/requests/authorization';

export const makeAuthorization = async (): Promise<HttpResponse> => {
  const { httpClient, token, refreshToken } = await makeClientAndToken();
  return authorization(httpClient, token, refreshToken);
};
