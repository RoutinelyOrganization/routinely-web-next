import { makeClientAndToken } from '@/factories/services/makeClientAndToken';
import { authorization } from '@/services/requests/authorization';
import type { HttpResponse } from '@/types/contracts/services/httpResponse';

export const makeAuthorization = async (
  token: string,
  refreshToken: string,
): Promise<HttpResponse> => {
  const { httpClient } = await makeClientAndToken();
  return authorization(httpClient, token, refreshToken);
};
