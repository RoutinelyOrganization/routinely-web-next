import { makeLogout } from '@/factories/services/makeLogout';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { signOut, useSession } from 'next-auth/react';
import Header from '.';

// Mock as funções
jest.mock('@/factories/services/makeLogout', () => ({
  makeLogout: jest.fn(),
}));

jest.mock('next-auth/react', () => ({
  signOut: jest.fn(),
  useSession: jest.fn(),
}));

describe('Header', () => {
  beforeEach(() => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
  });

  it('should render MenuHeader Component if hasUser is true', () => {
    (useSession as jest.Mock).mockReturnValue({ data: { user: { token: 'fake-token' } } });
    render(<Header header="primary" hrefBackPage="/" />);
    const logoElement = screen.getByAltText('logo Routinely');
    expect(logoElement).toBeInTheDocument();
  });

  it('should render MenuHeader Component if hasUser is true', () => {
    (useSession as jest.Mock).mockReturnValue({ data: { user: { token: 'fake-token' } } });
    render(<Header header="secondary" hrefBackPage="/" />);
    const buttonElement = screen.getByAltText('Voltar');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call makeLogout and signOut on menu item click', async () => {
    (useSession as jest.Mock).mockReturnValue({ data: { user: { token: 'mock-token' } } });
    render(<Header header="primary" />);

    const iconMenu = screen.getByAltText('abrir menu');
    fireEvent.click(iconMenu);

    const logoutMenuItem = screen.getByText('Sair da conta');

    fireEvent.click(logoutMenuItem);

    await waitFor(() => {
      expect(makeLogout).toHaveBeenCalledWith('mock-token');
      expect(signOut).toHaveBeenCalledWith({ callbackUrl: '/' });
    });
  });
});
