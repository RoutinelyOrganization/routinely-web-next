import { makeChangePassword } from '@/factories/services/makeChangePassword';
import type { ErrorApi } from '@/services/errors/errorApi';
import { makeCookiesMock } from '@mocks/makeCookiesMock';
import { act, fireEvent, render, screen } from '@testing-library/react';
import CreateNewPassword from '.';

jest.mock('@/factories/cookies/makeCookies', () => ({
  makeCookies: jest.fn(() => makeCookiesMock),
}));

jest.mock('@/factories/services/makeChangePassword', () => ({
  makeChangePassword: jest
    .fn()
    .mockResolvedValueOnce(undefined)
    .mockRejectedValueOnce({ status: 500, body: ['invalid code'] } as ErrorApi),
}));

describe('<CreateNewPassword/>', () => {
  it('should render', () => {
    render(<CreateNewPassword />);
    const inputs = screen.getAllByRole('textbox');

    expect(inputs).toHaveLength(2);
    expect(inputs[0]).toHaveAttribute('placeholder', 'senha');
    expect(inputs[1]).toHaveAttribute('placeholder', 'repetir senha');

    const button = screen.getByRole('button', { name: /atualizar senha/i });
    expect(button).toBeInTheDocument();
  });

  it('shoul change placeholder in confirm password when window width < 904', async () => {
    render(<CreateNewPassword />);
    let labelConfirmPassword = screen.getByLabelText('Repetir senha');

    expect(labelConfirmPassword).toBeInTheDocument();

    await act(async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 903, // Define a largura desejada para este teste
      });

      window.dispatchEvent(new Event('resize'));
    });

    labelConfirmPassword = await screen.findByLabelText('Repetir');
    expect(labelConfirmPassword).toBeInTheDocument();
  });

  it('should render error messages fields required', async () => {
    render(<CreateNewPassword />);
    const button = screen.getByRole('button', { name: /atualizar senha/i });

    act(() => {
      fireEvent.click(button);
    });

    expect(await screen.findByText('O campo senha é obrigatório.')).toBeInTheDocument();
    expect(await screen.findByText('O campo repetir senha é obrigatório.')).toBeInTheDocument();
  });

  it('should render error messages of pattern in field password', async () => {
    render(<CreateNewPassword />);
    const inputPassword = screen.getAllByRole('textbox')[0];

    act(() => {
      fireEvent.change(inputPassword, { target: { value: '123' } });
    });

    expect(
      await screen.findByText(
        'A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =',
      ),
    ).toBeInTheDocument();
  });

  it('should render error message password is different from confirm password', async () => {
    render(<CreateNewPassword />);
    const [inputPassword, inputConfirmPassword] = screen.getAllByRole('textbox');

    await act(async () => {
      fireEvent.change(inputConfirmPassword, { target: { value: '@Teste123' } });
    });

    const errorMessage = await screen.findByText('As senhas devem ser iguais');
    expect(errorMessage).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(inputPassword, { target: { value: '@Teste123' } });
    });

    expect(errorMessage).not.toBeInTheDocument();
  });

  it('should change visible password', async () => {
    render(<CreateNewPassword />);

    // captura os inputs
    const [inputPassword, inputConfirmPassword] = screen.getAllByRole('textbox');

    // verifica o tipo inicial dos inputs
    expect((inputPassword as HTMLInputElement).type).toBe('password');
    expect((inputConfirmPassword as HTMLInputElement).type).toBe('password');

    // captura os spans de exibir senha e dispara o evento
    const [showPasswordButton, showConfirmPasswordButton] = screen.getAllByText('EXIBIR');
    fireEvent.click(showPasswordButton);
    fireEvent.click(showConfirmPasswordButton);

    // verifica o tipo dos inputs testando a alteração
    expect((inputPassword as HTMLInputElement).type).toBe('text');
    expect((inputConfirmPassword as HTMLInputElement).type).toBe('text');

    // captura os spans de esconder senha e dispara o evento
    const [hidePasswordButton, hideConfirmPasswordButton] = screen.getAllByText('ESCONDER');
    fireEvent.click(hidePasswordButton);
    fireEvent.click(hideConfirmPasswordButton);

    // verifica o tipo dos inputs testando a alteração
    expect((inputPassword as HTMLInputElement).type).toBe('password');
    expect((inputConfirmPassword as HTMLInputElement).type).toBe('password');
  });

  it('should update passwords with success', async () => {
    render(<CreateNewPassword />);
    const dataCookies = ['accountId', 'code'];

    const [inputPassword, inputConfirmPassword] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: /atualizar senha/i });

    await act(async () => {
      fireEvent.change(inputPassword, { target: { value: '@Teste123' } });
      fireEvent.change(inputConfirmPassword, { target: { value: '@Teste123' } });
      fireEvent.click(button);
    });

    expect(makeCookiesMock.getCookies).toHaveBeenCalledWith(dataCookies);
    expect(makeChangePassword).toHaveBeenCalled();
    expect(makeCookiesMock.deleteCookies).toHaveBeenCalledWith(dataCookies);
  });

  it('should not update passwords with error', async () => {
    render(<CreateNewPassword />);
    const [inputPassword, inputConfirmPassword] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: /atualizar senha/i });

    await act(async () => {
      fireEvent.change(inputPassword, { target: { value: '@Teste123' } });
      fireEvent.change(inputConfirmPassword, { target: { value: '@Teste123' } });
      fireEvent.click(button);
    });

    expect(await screen.findByText('Invalid code')).toBeInTheDocument();
  });
});
