import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoginForm from '.';

jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  signIn: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn().mockReturnValue({ replace: jest.fn() }),
}));

describe('<LoginForm/>', () => {
  it('should render', async () => {
    render(<LoginForm />);

    const [inputEmail, inputPassword, checkbox] = screen.getAllByRole('textbox');
    const link = screen.getByRole('link');
    const button = screen.getByRole('button', { name: /fazer login/i });

    expect(inputEmail).toHaveAttribute('placeholder', 'e-mail');
    expect(inputPassword).toHaveAttribute('placeholder', 'senha');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(link).toHaveTextContent('Esqueci minha senha');
    expect(screen.getByText('Lembrar meu acesso')).toBeInTheDocument();
    expect(button).toHaveTextContent('Fazer login');
  });

  it('should render error messages fields required', async () => {
    render(<LoginForm />);
    const button = screen.getByRole('button', { name: /fazer login/i });

    fireEvent.click(button);

    expect(await screen.findByText('O campo e-mail é obrigatório')).toBeInTheDocument();
    expect(await screen.findByText('O campo senha é obrigatório')).toBeInTheDocument();
  });

  it('should change visible password', async () => {
    render(<LoginForm />);

    // captura os inputs
    const inputPassword = screen.getAllByRole('textbox')[1];

    // verifica o tipo inicial dos inputs
    expect((inputPassword as HTMLInputElement).type).toBe('password');

    // captura os spans de exibir senha e dispara o evento
    const showPasswordButton = screen.getByText('EXIBIR');
    fireEvent.click(showPasswordButton);

    // verifica o tipo dos inputs testando a alteração
    expect((inputPassword as HTMLInputElement).type).toBe('text');

    // captura os spans de esconder senha e dispara o evento
    const hidePasswordButton = screen.getByText('ESCONDER');
    fireEvent.click(hidePasswordButton);

    // verifica o tipo dos inputs testando a alteração
    expect((inputPassword as HTMLInputElement).type).toBe('password');
  });

  it('should render error message of pattern in field email', async () => {
    render(<LoginForm />);
    const inputEmail = screen.getAllByRole('textbox')[0];

    fireEvent.change(inputEmail, { target: { value: 'teste' } });
    expect(await screen.findByText('Preencha um e-mail válido')).toBeInTheDocument();
  });

  it('should render error message of pattern in field password', async () => {
    render(<LoginForm />);
    const inputPassword = screen.getAllByRole('textbox')[1];

    fireEvent.change(inputPassword, { target: { value: '123' } });
    expect(
      await screen.findByText(
        'A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =',
      ),
    ).toBeInTheDocument();
  });

  it('should execute function on submit', async () => {
    const mockReplace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
    (signIn as jest.Mock).mockImplementation(() => Promise.resolve({ ok: true }));

    render(<LoginForm />);
    const [inputEmail, inputPassword] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: /fazer login/i });

    await act(async () => {
      fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
      fireEvent.change(inputPassword, { target: { value: 'Test@123' } });
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(signIn).toHaveBeenCalled();
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'teste@teste.com',
        password: 'Test@123',
        remember: false,
        redirect: false,
      });

      expect(mockReplace).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should not execute function on submit with error', async () => {
    (signIn as jest.Mock).mockImplementation(() =>
      Promise.resolve({ ok: false, error: 'Credenciais inválidas' }),
    );
    render(<LoginForm />);
    const [inputEmail, inputPassword] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: /fazer login/i });

    await act(async () => {
      fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
      fireEvent.change(inputPassword, { target: { value: 'Test@123' } });
      fireEvent.click(button);
    });

    expect(await screen.findByText('Credenciais inválidas')).toBeInTheDocument();
  });
});
