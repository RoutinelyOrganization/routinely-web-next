import { FetchAdapter } from '@/services/adapter/fetchAdapter';
import type { HttpClient } from '@/services/contracts/httpClient';

export const makeClientAndToken = () => {
  const httpClient: HttpClient = new FetchAdapter();
  const token = window.localStorage.getItem('token') || '';
  return { httpClient, token };
};
