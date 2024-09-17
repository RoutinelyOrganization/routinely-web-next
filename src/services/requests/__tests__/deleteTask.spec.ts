import { makeHttpClient } from '@mocks/fetchAdapterStub';
import { deleteTask } from '../deleteTask';

const token = 'token';
const id = '1';
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

describe('Delete Task', () => {
  it('Should return correct response', async () => {
    const response = await deleteTask(httpClient, id, token);

    expect(response).toBeUndefined();
  });

  it('Should return with errors', async () => {
    const response = await deleteTask(httpClient, id, token);

    expect(response).toBeUndefined();
  });

  it('Should throw an error', async () => {
    const mockError = new Error('Error');
    jest.spyOn(httpClient, 'request').mockRejectedValue(mockError);
    await expect(deleteTask(httpClient, id, token)).rejects.toThrow(mockError);
  });

  it('Shoul call httpClient with correct params', async () => {
    jest
      .spyOn(httpClient, 'request')
      .mockImplementation(() => Promise.resolve({ status: 200, ok: true }));
    await deleteTask(httpClient, id, token);
    expect(httpClient.request).toHaveBeenCalledWith('/tasks/1', {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
});
