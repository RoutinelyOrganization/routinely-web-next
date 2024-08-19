import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import type { Login } from '@/types/login';
import { makeHttpClient } from '@mocks/fetchAdapterStub';
import { login } from '../login';

const testLoginData: Login = {
  email: 'test@example.com',
  password: 'password123',
  remember: false,
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

describe('Login', () => {
  it('Should return correct response', async () => {
    const mockResponse: HttpResponse = {
      status: 200,
      body: { token: 'fake-token' },
    };

    const response = await login(httpClient, testLoginData);

    expect(response).toEqual(mockResponse);
  });

  it('Should return with errors', async () => {
    const mockResponse: HttpResponse = {
      status: 500,
      body: ['Credenciais inválidas'],
    };

    const response = await login(httpClient, testLoginData);

    expect(response).toEqual(mockResponse);
  });

  it('Should throw an error', async () => {
    const mockError = new Error('Error');
    jest.spyOn(httpClient, 'request').mockRejectedValue(mockError);
    await expect(login(httpClient, testLoginData)).rejects.toThrow(mockError);
  });

  it('Shoul call httpClient with correct params', async () => {
    jest.spyOn(httpClient, 'request').mockImplementation(() => Promise.resolve({ status: 200 }));
    await login(httpClient, testLoginData);
    expect(httpClient.request).toHaveBeenCalledWith('/auth', {
      method: 'POST',
      body: testLoginData,
    });
  });
});
