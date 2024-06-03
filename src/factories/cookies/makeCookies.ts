import { CookiesAdapter } from '@/adapters/cookiesAdapter';
import type { Cookies } from '@/types/contracts/cookies/cookies';
import { makeCrypto } from '../crypto/makeCrypto';

export const makeCookies = (): Cookies => {
  const hash = makeCrypto();
  return new CookiesAdapter(hash);
};
