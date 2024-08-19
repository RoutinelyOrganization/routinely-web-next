import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import { makeHttpClient } from '@mocks/fetchAdapterStub';

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

describe('FetchAdapter', () => {
  it('Should return correct response', async () => {
    const mockResponse: HttpResponse = {
      status: 200,
      body: { token: 'fake-token' },
    };

    const response = await httpClient.request('/any_url', {} as any);

    expect(response).toEqual(mockResponse);
  });

  it('Should return with errors', async () => {
    const mockResponse: HttpResponse = {
      status: 500,
      body: ['Credenciais inválidas'],
    };

    const response = await httpClient.request('/any_url', {} as any);

    expect(response).toEqual(mockResponse);
  });

  it('Should throw an error', async () => {
    const mockError = new Error('Error');
    jest.spyOn(httpClient, 'request').mockRejectedValue(mockError);
    await expect(httpClient.request('/any_url', {} as any)).rejects.toThrow(mockError);
  });
});
