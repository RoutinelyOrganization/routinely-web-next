import { render, screen } from '@testing-library/react';
import Header from '.';
import { useSession } from 'next-auth/react';

// Mock as funções
jest.mock('@/factories/services/makeLogout', () => ({
  makeLogout: jest.fn(),
}));

jest.mock('next-auth/react', () => ({
  signOut: jest.fn(),
  useSession: jest.fn(),
}));

describe('Header', () => {
  // Referências para os mocks

  beforeEach(() => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
  });
  //Testando se o Header for Primary, então exibe a logo
  it('should render MenuHeader Component if hasUser is true', () => {
    (useSession as jest.Mock).mockReturnValue({ data: { user: { token: 'fake-token' } } });
    render(<Header header="primary" hrefBackPage="/" />);
    const logoElement = screen.getByAltText('logo Routinely');
    expect(logoElement).toBeInTheDocument();
  });
  //Testando se o Header for Secondary, então exibe o botão com nome voltar
  it('should render MenuHeader Component if hasUser is true', () => {
    (useSession as jest.Mock).mockReturnValue({ data: { user: { token: 'fake-token' } } });
    render(<Header header="secondary" hrefBackPage="/" />);
    const buttonElement = screen.getByAltText('Voltar');
    expect(buttonElement).toBeInTheDocument();
  });
});
