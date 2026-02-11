import { makeSignUp } from '@/factories/services/makeSignUp';
import type { ErrorApi } from '@/services/errors/errorApi';
import { act, fireEvent, render, screen } from '@testing-library/react';
import SingUpForm from '.';

jest.mock('@/factories/services/makeSignUp', () => ({
  makeSignUp: jest
    .fn()
    .mockResolvedValueOnce({ ok: true })
    .mockResolvedValueOnce({ status: 500, body: ['invalid data'] } as ErrorApi),
}));

describe('<SingUpForm/>', () => {
  it('should render', () => {
    render(<SingUpForm />);
    const [inputName, inputEmail, inputPassword, inputConfirmPassword, checkbox] =
      screen.getAllByRole('textbox');

    expect(inputName).toHaveAttribute('placeholder', 'nome');
    expect(inputEmail).toHaveAttribute('placeholder', 'email');
    expect(inputPassword).toHaveAttribute('placeholder', 'senha');
    expect(inputConfirmPassword).toHaveAttribute('placeholder', 'confirmar senha');
    expect(checkbox).toHaveAttribute('type', 'checkbox');

    // verifica a presença do span
    expect(screen.getByText('Declaro que li e concordo com os')).toBeInTheDocument();

    // verifica a presença do link com o texto correto
    expect(screen.getByRole('link')).toHaveTextContent('termos de uso e política de privacidade.');

    expect(screen.getByRole('button', { name: /criar conta/i })).toBeInTheDocument();
  });

  it('shoul change placeholder in confirm password when window width < 904', async () => {
    render(<SingUpForm />);
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

  it('should change visible password', async () => {
    render(<SingUpForm />);

    // captura os inputs
    const [, , inputPassword, inputConfirmPassword] = screen.getAllByRole('textbox');

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

  it('should render error messages fields required', async () => {
    render(<SingUpForm />);
    const button = screen.getByRole('button', { name: /criar conta/i });

    fireEvent.click(button);

    expect(await screen.findByText('O campo nome é obrigatório.')).toBeInTheDocument();
    expect(await screen.findByText('O campo email é obrigatório.')).toBeInTheDocument();
    expect(await screen.findByText('O campo senha é obrigatório.')).toBeInTheDocument();
    expect(await screen.findByText('O campo repetir senha é obrigatório.')).toBeInTheDocument();
    expect(
      await screen.findByText('O usuário deve estar de acordo com os termos.'),
    ).toBeInTheDocument();
  });

  it('should render error messages of pattern in field name', async () => {
    render(<SingUpForm />);
    const inputName = screen.getAllByRole('textbox')[0];

    // deve permitir pelo menos 3 caracteres
    fireEvent.change(inputName, { target: { value: 'ab' } });
    expect(
      await screen.findByText('O campo nome deve conter pelo menos 3 caracteres.'),
    ).toBeInTheDocument();

    // deve permitir no maximo 100 caracteres
    fireEvent.change(inputName, { target: { value: 'a'.repeat(101) } });
    expect(
      await screen.findByText('O campo nome deve conter no maximo 100 caracteres.'),
    ).toBeInTheDocument();

    // não deve permitir caracteres especiais ou numeros
    fireEvent.change(inputName, { target: { value: '123' } });
    expect(
      await screen.findByText('O campo nome não pode conter números nem caracteres especiais.'),
    ).toBeInTheDocument();
  });

  it('should render error messages of pattern in field email', async () => {
    render(<SingUpForm />);
    const inputEmail = screen.getAllByRole('textbox')[1];

    fireEvent.change(inputEmail, { target: { value: 'teste' } });
    expect(await screen.findByText('E-mail inválido.')).toBeInTheDocument();
  });

  it('should render error messages of pattern in field password', async () => {
    const arrange = [
      {
        value: '123',
        message: 'A senha deve ter no mínimo 6 caracteres',
      },
      {
        value: '123456',
        message: 'A senha deve ter no mínimo uma letra maiúscula',
      },
      {
        value: '12345A',
        message: 'A senha deve ter no mínimo uma letra minúscula',
      },
      {
        value: '12345Aa',
        message: 'A senha deve ter no mínimo um símbolo (!, @, #, $, +)',
      },
      {
        value: 'Semnum',
        message: 'A senha deve ter no mínimo um número',
      },
      {
        value: '12345Aa@12345Aa@12345Aa@',
        message: 'A senha deve ter no máximo 20 caracteres',
      },
    ];

    render(<SingUpForm />);
    const inputPassword = screen.getAllByRole('textbox')[2];

    for (const item of arrange) {
      act(() => {
        fireEvent.change(inputPassword, { target: { value: item.value } });
      });

      expect(inputPassword).toHaveValue(item.value);
      expect(await screen.findByText(item.message)).toBeInTheDocument();
    }
  });

  it('should render error message password is different from confirm password', async () => {
    render(<SingUpForm />);
    const [, , inputPassword, inputConfirmPassword] = screen.getAllByRole('textbox');

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

  it('should create account with success', async () => {
    render(<SingUpForm />);

    const [inputName, inputEmail, inputPassword, inputConfirmPassword, checkbox] =
      screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: /criar conta/i });

    await act(async () => {
      fireEvent.change(inputName, { target: { value: 'Teste' } });
      fireEvent.change(inputEmail, { target: { value: '2hV5S@example.com' } });
      fireEvent.change(inputPassword, { target: { value: '@Teste123' } });
      fireEvent.change(inputConfirmPassword, { target: { value: '@Teste123' } });
      fireEvent.click(checkbox);

      fireEvent.click(button);
    });

    expect(makeSignUp).toHaveBeenCalled();
  });

  it('should not create account with error', async () => {
    render(<SingUpForm />);

    const [inputName, inputEmail, inputPassword, inputConfirmPassword, checkbox] =
      screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: /criar conta/i });

    await act(async () => {
      fireEvent.change(inputName, { target: { value: 'Teste' } });
      fireEvent.change(inputEmail, { target: { value: '2hV5S@example.com' } });
      fireEvent.change(inputPassword, { target: { value: '@Teste123' } });
      fireEvent.change(inputConfirmPassword, { target: { value: '@Teste123' } });
      fireEvent.click(checkbox);

      fireEvent.click(button);
    });

    expect(await screen.findByText('Invalid data')).toBeInTheDocument();
  });
});
