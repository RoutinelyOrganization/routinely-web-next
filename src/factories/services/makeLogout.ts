import { makeClientAndToken } from '@/factories/services/makeClientAndToken';
import { logout } from '@/services/requests/logout';

export const makeLogout = async (): Promise<void> => {
  const { httpClient, token } = await makeClientAndToken();
  return logout(httpClient, token);
};
