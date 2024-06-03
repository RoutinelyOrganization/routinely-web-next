import { CryptoJsAdapter } from '@/adapters/cryptoJsAdapter';
import type { Criptography } from '@/types/contracts/criptography/criptography';

export const makeCrypto = (): Criptography => {
  return new CryptoJsAdapter(process.env.NEXT_PUBLIC_SECRET_CRYPTO!);
};
