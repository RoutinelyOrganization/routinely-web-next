import type { Criptography } from '@/types/contracts/criptography/criptography';
import CryptoJS from 'crypto-js';

export class CryptoJsAdapter implements Criptography {
  private readonly secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  decrypt(encryptedValue: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
