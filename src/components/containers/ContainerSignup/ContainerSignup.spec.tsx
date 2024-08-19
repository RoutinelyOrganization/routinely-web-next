import { render, screen } from '@testing-library/react';
import ContainerSignUp from '.';

describe('ContainerSignUp Component', () => {
  it('Should render', () => {
    render(<ContainerSignUp />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);

    expect(links[0]).toHaveTextContent('Voltar');
    expect(links[0]).toHaveAttribute('href', '/welcome');

    expect(links[1]).toHaveTextContent('termos de uso e política de privacidade.');
    expect(links[1]).toHaveAttribute('href', '#');

    expect(links[2]).toHaveTextContent('Já possui uma conta?');
    expect(links[2]).toHaveAttribute('href', '/login');

    const logo = screen.getByRole('img', { name: 'logo Routinely' });
    expect(logo).toBeInTheDocument();

    const title = screen.getByText('Crie sua conta');
    expect(title).toBeInTheDocument();

    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(5);

    expect(inputs[0]).toHaveAttribute('placeholder', 'nome');
    expect(inputs[1]).toHaveAttribute('placeholder', 'email');
    expect(inputs[2]).toHaveAttribute('placeholder', 'senha');
    expect(inputs[3]).toHaveAttribute('placeholder', 'confirmar senha');
    expect(inputs[4]).toHaveAttribute('type', 'checkbox');

    const buttonGoogle = screen.getByText('Continuar com Google');
    expect(buttonGoogle).toBeInTheDocument();

    const image = screen.getByRole('img', { name: 'Imagem da página de criar conta' });
    expect(image).toBeInTheDocument();
  });
});
