import type { HttpClient } from '@/services/contracts/httpClient';
import type { RequestOptions } from '@/services/contracts/requestOptions';
import type { HttpResponse } from '../contracts/httpResponse';
import { ErrorApi } from '../errors/errorApi';

export class FetchAdapter implements HttpClient {
  async request(url: string, options?: RequestOptions): Promise<HttpResponse> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, options);

      if (!response.ok) {
        throw new ErrorApi(response.statusText, response.status);
      }
      return {
        status: response.status,
        body: await response.json(),
      };
    } catch (error) {
      const _error = error as Error;
      throw new Error(_error?.message);
    }
  }
}
