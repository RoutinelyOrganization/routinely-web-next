import { CryptoJsAdapter } from '../cryptoJsAdapter';

const crypt = new CryptoJsAdapter('secretKey');
const values = { value: 'any_value', encryptedValue: '' };

describe('CryptoJsAdapter', () => {
  it('Should return encrypt value', () => {
    const result = crypt.encrypt(values.value);
    expect(result).not.toBe(values.encryptedValue);

    values.encryptedValue = result;
  });

  it('Should return decrypt value', () => {
    const result = crypt.decrypt(values.encryptedValue);
    expect(result).toBe(values.value);
  });
});
