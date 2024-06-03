import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import signUp from '@/services/requests/signUp';
import type { SignUp } from '@/types/signUp';

export const makeSignUp = async (body: SignUp): Promise<HttpResponse> => {
  const { httpClient } = await makeClientAndToken();
  return signUp(httpClient, body);
};
