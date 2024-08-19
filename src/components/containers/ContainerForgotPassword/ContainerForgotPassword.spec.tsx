import { render, screen } from '@testing-library/react';
import ContainerForgotPassword from '.';

describe('ContainerForgotPassword Component', () => {
  it('Should render', () => {
    render(<ContainerForgotPassword />);
    const buttonHeader = screen.getByRole('link');
    expect(buttonHeader).toBeInTheDocument();
    expect(buttonHeader).toHaveAttribute('href', '/login');
    expect(buttonHeader).toHaveTextContent('Voltar');

    const iconBack = buttonHeader.querySelector('img[alt="Voltar"]');
    expect(iconBack).toBeInTheDocument();

    const logo = screen.getByRole('img', { name: 'logo Routinely' });
    expect(logo).toBeInTheDocument();

    const title = screen.getByRole('heading', { name: 'Esqueceu sua senha?' });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText('Digite o e-mail cadastrado na sua conta Routinely');
    expect(subtitle).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Email');

    const image = screen.getByRole('img', { name: 'Personagem tentando lembrar a senha' });
    expect(image).toBeInTheDocument();
  });
});
