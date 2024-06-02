import type { HttpClient } from '@/services/contracts/httpClient';
import type { HttpResponse } from '@/services/contracts/httpResponse';
import type { SignUp } from '@/types/signUp';

export default async function signUp(httpClient: HttpClient, body: SignUp): Promise<HttpResponse> {
  try {
    const response = await httpClient.request('/auth/signup', {
      method: 'POST',
      body,
    });
    return response;
  } catch (error) {
    throw error;
  }
}
