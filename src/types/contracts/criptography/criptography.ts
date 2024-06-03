export interface Criptography {
  encrypt: (value: string) => string;
  decrypt: (value: string) => string;
}
