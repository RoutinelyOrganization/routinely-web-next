import { render, screen } from '@testing-library/react';
import ContainerWelcome from '.';

describe('ContainerWelcome Component', () => {
  it('Should render', () => {
    render(<ContainerWelcome />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);

    expect(links[0]).toHaveTextContent('Voltar');
    expect(links[0]).toHaveAttribute('href', '/');

    expect(links[1]).toHaveTextContent('Já tenho conta');
    expect(links[1]).toHaveAttribute('href', '/login');

    expect(links[2]).toHaveTextContent('Criar Conta');
    expect(links[2]).toHaveAttribute('href', '/signup');

    const logo = screen.getByRole('img', { name: 'logo Routinely' });
    expect(logo).toBeInTheDocument();

    const title = screen.getByText('Boas-vindas');
    expect(title).toBeInTheDocument();

    const paragraph = screen.getByText('Escolha uma das opções para acessar');
    expect(paragraph).toBeInTheDocument();

    const image = screen.getByAltText('Imagem da página de boas vindas');

    expect(image).toBeInTheDocument();
  });
});
