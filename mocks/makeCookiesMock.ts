export const makeCookiesMock = {
  getCookies: jest.fn(() => ({ accountId: 'mockedAccountId' })),
  setCookies: jest.fn(),
  deleteCookies: jest.fn(),
};
