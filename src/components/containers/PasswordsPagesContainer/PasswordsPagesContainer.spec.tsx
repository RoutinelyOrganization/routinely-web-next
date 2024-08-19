import forgotPasswordImage from '@public/imagens/forgotPasswordImage.svg';
import { render, screen } from '@testing-library/react';
import type { IPasswordsPagesContainer } from '.';
import PasswordsPagesContainer from '.';

const mockProps: IPasswordsPagesContainer = {
  title: 'Crie sua senha',
  subtitle: 'Crie uma senha segura para sua conta',
  form: (
    <form role="form">
      <input type="email" name="email" placeholder="Seu e-mail" />
    </form>
  ),
  headerHrefBackPage: '',
  image: {
    src: forgotPasswordImage,
    alt: 'image alt',
  },
};

describe('PasswordsPagesContainer Component', () => {
  it('Should render', () => {
    render(<PasswordsPagesContainer {...mockProps} />);

    const buttonHeader = screen.getByRole('button');
    expect(buttonHeader).toBeInTheDocument();
    expect(buttonHeader).toHaveTextContent('Voltar');

    const iconBack = buttonHeader.querySelector('img[alt="Voltar"]');
    expect(iconBack).toBeInTheDocument();

    const logo = screen.getByRole('img', { name: 'logo Routinely' });
    expect(logo).toBeInTheDocument();

    const title = screen.getByRole('heading', { name: mockProps.title });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(mockProps.subtitle);
    expect(subtitle).toBeInTheDocument();

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Seu e-mail');

    const image = screen.getByRole('img', { name: mockProps.image.alt });
    expect(image).toBeInTheDocument();
  });
});
