import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import { makeHttpClient } from '@mocks/fetchAdapterStub';
import { getTasks } from '../getTasks';

const token = 'fake-token';
const month = 'september';
const year = '2020';
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

    const response = await getTasks(httpClient, month, year, token);

    expect(response).toEqual(mockResponse);
  });

  it('Should return with errors', async () => {
    const mockResponse: HttpResponse = {
      status: 500,
      body: ['Credenciais inválidas'],
    };

    const response = await getTasks(httpClient, month, year, token);

    expect(response).toEqual(mockResponse);
  });

  it('Should throw an error', async () => {
    const mockError = new Error('Error');
    jest.spyOn(httpClient, 'request').mockRejectedValue(mockError);
    await expect(getTasks(httpClient, month, year, token)).rejects.toThrow(mockError);
  });

  it('Shoul call httpClient with correct params', async () => {
    jest.spyOn(httpClient, 'request').mockImplementation(() => Promise.resolve({ status: 200 }));
    await getTasks(httpClient, month, year, token);
    expect(httpClient.request).toHaveBeenCalledWith('/tasks/?month=september&year=2020', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
});
