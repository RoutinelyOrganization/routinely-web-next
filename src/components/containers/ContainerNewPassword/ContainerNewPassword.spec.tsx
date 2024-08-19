import { render, screen } from '@testing-library/react';
import ContainerNewPassword from '.';

describe('ContainerNewPassword Component', () => {
  it('Should render', () => {
    render(<ContainerNewPassword />);
    const buttonHeader = screen.getByRole('link');
    expect(buttonHeader).toBeInTheDocument();
    expect(buttonHeader).toHaveAttribute('href', '/redefine-password');
    expect(buttonHeader).toHaveTextContent('Voltar');

    const iconBack = buttonHeader.querySelector('img[alt="Voltar"]');
    expect(iconBack).toBeInTheDocument();

    const logo = screen.getByRole('img', { name: 'logo Routinely' });
    expect(logo).toBeInTheDocument();

    const title = screen.getByRole('heading', { name: 'Criar nova senha' });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(
      'Escolha uma nova senha abaixo, ela precisa ser diferente da anterior.',
    );
    expect(subtitle).toBeInTheDocument();

    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveAttribute('placeholder', 'senha');
    expect(inputs[1]).toHaveAttribute('placeholder', 'repetir senha');

    const image = screen.getByRole('img', { name: 'Personagem observando uma lista de papel' });
    expect(image).toBeInTheDocument();
  });
});
