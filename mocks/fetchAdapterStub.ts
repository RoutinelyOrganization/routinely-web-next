import { FetchAdapter } from '@/adapters/fetchAdapter';

export const makeHttpClient = () => {
  return new FetchAdapter();
};
