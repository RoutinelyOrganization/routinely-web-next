import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { logout } from '@/services/requests/logout';

export const makeLogout = (): Promise<void> => {
  const { httpClient, token } = makeClientAndToken();
  return logout(httpClient, token);
};
