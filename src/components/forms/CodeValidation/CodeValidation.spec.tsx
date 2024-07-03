import { makeValidateCode } from '@/factories/services/makeValidateCode';
import type { ErrorApi } from '@/services/errors/errorApi';
import { act, fireEvent, render, screen } from '@testing-library/react';
import CodeValidation from '.';

const makeCookiesMock = {
  getCookies: jest.fn(() => ({ accountId: 'mockedAccountId' })),
  setCookies: jest.fn(),
  deleteCookies: jest.fn(),
};

jest.mock('@/factories/cookies/makeCookies', () => ({
  makeCookies: jest.fn(() => makeCookiesMock),
}));

jest.mock('@/factories/services/makeValidateCode', () => ({
  makeValidateCode: jest
    .fn()
    .mockResolvedValueOnce(undefined)
    .mockRejectedValueOnce({ status: 500, body: ['invalid code'] } as ErrorApi),
}));

describe('<CodeValidation/>', () => {
  it('should render', () => {
    render(<CodeValidation />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('Não recebeu?');
    expect(span).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render input with placeholder "Código de verificação"', () => {
    render(<CodeValidation />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Código de verificação');
  });

  it('should render link with correcty params ', () => {
    render(<CodeValidation />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/forgot-password');
    expect(link).toHaveTextContent('Enviar novamente');
  });

  it('should render error message field required', async () => {
    render(<CodeValidation />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const span = await screen.findByText('Este campo é obrigatório.');
    expect(span).toBeInTheDocument();
  });

  it('should get acount id in cookies and set code', async () => {
    render(<CodeValidation />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '123456' } });

    await act(async () => {
      const button = screen.getByRole('button');
      fireEvent.click(button);
    });

    expect(makeCookiesMock.getCookies).toHaveBeenCalledWith(['accountId']);
    expect(makeCookiesMock.setCookies).toHaveBeenCalledWith({ code: '123456' });
  });

  it('should render error message invalid code', async () => {
    render(<CodeValidation />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '123456' } });
    await act(async () => {
      const button = screen.getByRole('button');
      fireEvent.click(button);
    });

    expect(makeValidateCode).toHaveBeenCalled();
    expect(await screen.findByText('Invalid code')).toBeInTheDocument();
  });
});
