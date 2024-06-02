import type { RequestOptions } from '@/services/contracts/requestOptions';
import type { HttpResponse } from './httpResponse';

export interface HttpClient {
  request: (url: string, options?: RequestOptions) => Promise<HttpResponse>;
}
