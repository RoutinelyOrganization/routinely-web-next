import { ErrorApi } from './../errorApi';

describe('ErrorApi Class', () => {
  it('should retunr only status', () => {
    const errorApi = new ErrorApi(500);

    expect(errorApi.status).toBe(500);
    expect(errorApi.body).toBeUndefined();
    expect(errorApi.name).toBe('ErrorApi');
  });

  it('should retunr status and body', () => {
    const errorApi = new ErrorApi(500, { errors: [{ message: 'error' }] });

    expect(errorApi.status).toBe(500);
    expect(errorApi.body).toEqual(['error']);
    expect(errorApi.name).toBe('ErrorApi');
  });

  it('should retunr status, body and name', () => {
    const errorApi = new ErrorApi(500, { errors: [{ message: 'error' }] }, 'CustomError');

    expect(errorApi.status).toBe(500);
    expect(errorApi.body).toEqual(['error']);
    expect(errorApi.name).toBe('CustomError');
  });
});
