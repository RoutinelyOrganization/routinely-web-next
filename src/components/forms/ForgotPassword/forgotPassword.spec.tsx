import type { ErrorApi } from '@/services/errors/errorApi';
import { makeCookiesMock } from '@mocks/makeCookiesMock';
import { act, fireEvent, render, screen } from '@testing-library/react';
import ForgotPassword from '.';

jest.mock('@/factories/cookies/makeCookies', () => ({
  makeCookies: jest.fn(() => makeCookiesMock),
}));

jest.mock('@/factories/services/makeResetPassword', () => ({
  makeResetPassword: jest
    .fn()
    .mockResolvedValueOnce({ accountId: 'accountId' })
    .mockRejectedValueOnce({ status: 500, body: ['invalid code'] } as ErrorApi),
}));

describe('<ForgotPassword/>', () => {
  it('should render', () => {
    render(<ForgotPassword />);
    const input = screen.getByRole('textbox');
    const span = screen.getByText('Você receberá um código de verificação no seu e-mail');
    const button = screen.getByRole('button', { name: /enviar/i });

    expect(input).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should render error messages fields required', async () => {
    render(<ForgotPassword />);
    const button = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(button);

    expect(await screen.findByText('O campo email é obrigatório.')).toBeInTheDocument();
  });

  it('should render error messages of pattern in field email', async () => {
    render(<ForgotPassword />);
    const inputEmail = screen.getByRole('textbox');

    fireEvent.change(inputEmail, { target: { value: 'teste' } });
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(await screen.findByText('Este campo precisa ser um email válido.')).toBeInTheDocument();
  });

  it('should update email with success', async () => {
    render(<ForgotPassword />);
    const inputEmail = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /enviar/i });

    await act(async () => {
      fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
      fireEvent.click(button);
    });

    expect(screen.queryByLabelText('message-error')).not.toBeInTheDocument();

    expect(makeCookiesMock.setCookies).toHaveBeenCalled();
  });
});
