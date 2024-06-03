import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { FetchAdapter } from '@/services/adapter/fetchAdapter';
import type { HttpClient } from '@/services/contracts/httpClient';
import { getServerSession } from 'next-auth';

interface makeClientAndTokenReturn {
  httpClient: HttpClient;
  token: string;
  refreshToken: string;
}

export const makeClientAndToken = async (): Promise<makeClientAndTokenReturn> => {
  const httpClient: HttpClient = new FetchAdapter();
  const { user } = (await getServerSession(nextAuthOptions)) as any;
  const { token, refreshToken } = user;

  return { httpClient, token, refreshToken };
};
