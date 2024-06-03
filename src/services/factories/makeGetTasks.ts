import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import { getTasks } from '@/services/requests/getTasks';

export const makeGetTasks = async (month?: number, year?: number): Promise<HttpResponse> => {
  const date = new Date();
  const monthCurrent = month || date.getMonth() + 1;
  const yearCurrent = year || date.getFullYear();
  const { httpClient, token } = await makeClientAndToken();
  return getTasks(httpClient, monthCurrent.toString(), yearCurrent.toString(), token);
};
