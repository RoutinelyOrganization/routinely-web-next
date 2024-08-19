import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import { makeHttpClient } from '@mocks/fetchAdapterStub';
import type { ValidateCode } from '../validateCode';
import { validateCode } from '../validateCode';

const token = 'test@example.com';
const body: ValidateCode = {
  code: '123456',
  accountId: 'vdvsnod',
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

describe('Authorization', () => {
  it('Should return correct response', async () => {
    const mockResponse: HttpResponse = {
      status: 200,
      body: { token: 'fake-token' },
    };

    const response = await validateCode(httpClient, body, token);

    expect(response).toEqual(mockResponse);
  });

  it('Should return with errors', async () => {
    const mockResponse: HttpResponse = {
      status: 500,
      body: ['Credenciais inválidas'],
    };

    const response = await validateCode(httpClient, body, token);

    expect(response).toEqual(mockResponse);
  });

  it('Should throw an error', async () => {
    const mockError = new Error('Error');
    jest.spyOn(httpClient, 'request').mockRejectedValue(mockError);
    await expect(validateCode(httpClient, body, token)).rejects.toThrow(mockError);
  });

  it('Shoul call httpClient with correct params', async () => {
    jest.spyOn(httpClient, 'request').mockImplementation(() => Promise.resolve({ status: 200 }));
    await validateCode(httpClient, body, token);
    expect(httpClient.request).toHaveBeenCalledWith('/auth/validatecode', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
  });
});
