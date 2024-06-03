import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import type { HttpResponse } from '../contracts/httpResponse';
import { validateCode, type ValidateCode } from '../requests/validateCode';

export const makeValidateCode = async (body: ValidateCode): Promise<HttpResponse> => {
  const { httpClient, token } = await makeClientAndToken();
  return validateCode(httpClient, body, token);
};
