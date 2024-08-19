import { render, screen } from '@testing-library/react';
import ContainerValidationCode from '.';

describe('ContainerValidationCode Component', () => {
  it('Should render', () => {
    render(<ContainerValidationCode />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);

    expect(links[0]).toHaveTextContent('Voltar');
    expect(links[0]).toHaveAttribute('href', '/forgot-password');

    expect(links[1]).toHaveTextContent('Enviar novamente');
    expect(links[1]).toHaveAttribute('href', '/forgot-password');

    const iconBack = links[0].querySelector('img[alt="Voltar"]');
    expect(iconBack).toBeInTheDocument();

    const logo = screen.getByRole('img', { name: 'logo Routinely' });
    expect(logo).toBeInTheDocument();

    const title = screen.getByRole('heading', { name: 'Redefinir senha' });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText('Insira o código de verificação enviado no email.');
    expect(subtitle).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Código de verificação');

    const image = screen.getByRole('img', { name: 'Personagem pensando em uma nova senha' });
    expect(image).toBeInTheDocument();
  });
});
