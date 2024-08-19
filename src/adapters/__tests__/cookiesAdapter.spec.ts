import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { CookiesAdapter } from '../cookiesAdapter';

// Mock das funções do nookies
jest.mock('nookies', () => ({
  parseCookies: jest.fn(),
  setCookie: jest.fn(),
  destroyCookie: jest.fn(),
}));

const mockHash = {
  encrypt: jest.fn(),
  decrypt: jest.fn(),
};

let cookiesAdapter: CookiesAdapter;

beforeEach(() => {
  cookiesAdapter = new CookiesAdapter(mockHash);
});

afterEach(() => {
  jest.clearAllMocks();
});
describe('CookiesAdapter', () => {
  it('should return decrypted cookies', () => {
    const cookies = { key1: 'encryptedvalue1', key2: 'encryptedvalue2' };
    const decryptedCookies = { key1: 'value1', key2: 'value2' };

    (parseCookies as jest.Mock).mockReturnValue(cookies);
    mockHash.decrypt.mockImplementation(value => {
      return value.replace('encrypted', '');
    });

    const result = cookiesAdapter.getCookies(['key1', 'key2']);

    expect(parseCookies).toHaveBeenCalled();
    expect(mockHash.decrypt).toHaveBeenCalledWith('encryptedvalue1');
    expect(mockHash.decrypt).toHaveBeenCalledWith('encryptedvalue2');
    expect(result).toEqual(decryptedCookies);
  });

  it('should set encrypted cookies', () => {
    const cookiesToSet = { key1: 'value1', key2: 'value2' };

    mockHash.encrypt.mockImplementation(value => {
      return `encrypted${value}`;
    });

    cookiesAdapter.setCookies(cookiesToSet);

    expect(mockHash.encrypt).toHaveBeenCalledWith('value1');
    expect(mockHash.encrypt).toHaveBeenCalledWith('value2');
    expect(setCookie).toHaveBeenCalledWith(null, 'key1', 'encryptedvalue1', {
      maxAge: 60 * 60 * 1,
    });
    expect(setCookie).toHaveBeenCalledWith(null, 'key2', 'encryptedvalue2', {
      maxAge: 60 * 60 * 1,
    });
  });

  it('should delete cookies', () => {
    const keysToDelete = ['key1', 'key2'];

    cookiesAdapter.deleteCookies(keysToDelete);

    expect(destroyCookie).toHaveBeenCalledWith(null, 'key1');
    expect(destroyCookie).toHaveBeenCalledWith(null, 'key2');
  });
});
