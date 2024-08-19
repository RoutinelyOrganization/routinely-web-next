import { render, screen } from '@testing-library/react';
import ContainerLogin from '.';

describe('ContainerLogin Component', () => {
  it('Should render', () => {
    render(<ContainerLogin />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);

    expect(links[0]).toHaveTextContent('Voltar');
    expect(links[0]).toHaveAttribute('href', '/welcome');

    expect(links[1]).toHaveTextContent('Esqueci minha senha');
    expect(links[1]).toHaveAttribute('href', '/forgot-password');

    expect(links[2]).toHaveTextContent('Não tem uma conta?');
    expect(links[2]).toHaveAttribute('href', '/signup');

    const title = screen.getByText('Acessar conta');
    expect(title).toBeInTheDocument();

    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(3);

    expect(inputs[0]).toHaveAttribute('placeholder', 'e-mail');
    expect(inputs[1]).toHaveAttribute('placeholder', 'senha');
    expect(inputs[2]).toHaveAttribute('type', 'checkbox');

    const button = screen.getByText('Fazer login');
    expect(button).toBeInTheDocument();

    const image = screen.getByRole('img', { name: 'Personagem abrindo a porta' });
    expect(image).toBeInTheDocument();
  });
});
