import { makeHttpClient } from '@mocks/fetchAdapterStub';
import { logout } from '../logout';

const token = 'fake-token';
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

describe('Logout', () => {
  it('Should return correct response', async () => {
    const response = await logout(httpClient, token);

    expect(response).toBeUndefined();
  });

  it('Should return with errors', async () => {
    const response = await logout(httpClient, token);

    expect(response).toBeUndefined();
  });

  it('Should throw an error', async () => {
    const mockError = new Error('Error');
    jest.spyOn(httpClient, 'request').mockRejectedValue(mockError);
    await expect(logout(httpClient, token)).rejects.toThrow(mockError);
  });

  it('Shoul call httpClient with correct params', async () => {
    jest.spyOn(httpClient, 'request').mockImplementation(() => Promise.resolve({ status: 200 }));
    await logout(httpClient, token);
    expect(httpClient.request).toHaveBeenCalledWith('/auth/disconnect', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        closeAllSessions: true,
      },
    });
  });
});
