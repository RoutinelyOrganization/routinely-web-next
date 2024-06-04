import type { Cookies, ObjCookies } from '@/types/contracts/cookies/cookies';
import type { Criptography } from '@/types/contracts/criptography/criptography';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

export class CookiesAdapter implements Cookies {
  constructor(private hash: Criptography) {
    this.hash = hash;
  }
  getCookies(keys: string[]) {
    return keys.reduce((acc, nameKey) => {
      const key = nameKey;
      const cookies = parseCookies();
      return {
        ...acc,
        [key]: this.hash.decrypt(cookies[nameKey]),
      };
    }, {});
  }
  setCookies(obj: ObjCookies) {
    Object.keys(obj).forEach(key => {
      const hashValue = this.hash.encrypt(obj[key]);
      setCookie(null, key, hashValue, {
        maxAge: 60 * 60 * 1, // 1 hour
      });
    });
  }
  deleteCookies(keys: string[]) {
    keys.forEach(key => {
      destroyCookie(null, key);
    });
  }
}
