import type { HttpResponse } from '@/services/contracts/httpResponse';
import { makeClientAndToken } from '@/services/factories/makeClientAndToken';
import signUp from '@/services/requests/signUp';
import type { SignUp } from '@/types/signUp';

export const makeSignUp = (body: SignUp): Promise<HttpResponse> => {
  const { httpClient } = makeClientAndToken();
  return signUp(httpClient, body);
};
