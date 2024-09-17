import type { HttpClient } from '@/types/contracts/services/httpClient';
import type { HttpResponse } from '@/types/contracts/services/httpResponse';
import type { RequestOptions } from '@/types/contracts/services/requestOptions';
import { ErrorApi } from '../services/errors/errorApi';

export class FetchAdapter implements HttpClient {
  async request(url: string, options: RequestOptions): Promise<HttpResponse> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
        method: options.method,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(options.body),
      });

      const body = await response.json();

      if (!response.ok) {
        const errorApi = new ErrorApi(response.status, body, response.statusText);
        return {
          status: errorApi.status,
          body: errorApi.body,
          ok: false,
        };
      }
      return {
        ok: true,
        status: response.status,
        body,
      };
    } catch (error) {
      const _error = error as Error;
      throw new Error(_error?.message);
    }
  }
}
