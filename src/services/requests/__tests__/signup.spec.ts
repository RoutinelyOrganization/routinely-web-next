import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import type { SignUp } from '@/types/signUp';
import { makeHttpClient } from '@mocks/fetchAdapterStub';
import signUp from '../signUp';

const testSignUpData: SignUp = {
  name: 'test',
  email: 'test@example.com',
  password: 'password123',
  acceptedTerms: true,
};

const httpClient = makeHttpClient();

global.fetch = jest
  .fn()
  .mockResolvedValueOnce({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ token: 'fake-token' }),
  })
  .mockResolvedValueOnce({
    ok: false,
    status: 500,
    json: () => Promise.resolve({ errors: [{ message: 'Credenciais inválidas' }] }),
  });

afterAll(() => {
  jest.clearAllMocks();
});

describe('Sign Up', () => {
  it('Should return correct response', async () => {
    const mockResponse: HttpResponse = {
      status: 200,
      body: { token: 'fake-token' },
      ok: true,
    };

    const response = await signUp(httpClient, testSignUpData);

    expect(response).toEqual(mockResponse);
  });

  it('Should return with errors', async () => {
    const mockResponse: HttpResponse = {
      status: 500,
      body: ['Credenciais inválidas'],
      ok: false,
    };

    const response = await signUp(httpClient, testSignUpData);

    expect(response).toEqual(mockResponse);
  });

  it('Should throw an error', async () => {
    const mockError = new Error('Error');
    jest.spyOn(httpClient, 'request').mockRejectedValue(mockError);
    await expect(signUp(httpClient, testSignUpData)).rejects.toThrow(mockError);
  });

  it('Shoul call httpClient with correct params', async () => {
    jest
      .spyOn(httpClient, 'request')
      .mockImplementation(() => Promise.resolve({ status: 200, ok: true }));
    await signUp(httpClient, testSignUpData);
    expect(httpClient.request).toHaveBeenCalledWith(
      `/auth/register?callBackUrl=${process.env.NEXT_PUBLIC_FRONT_URL}/login`,
      {
        method: 'POST',
        body: testSignUpData,
      },
    );
  });
});
