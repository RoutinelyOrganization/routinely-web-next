import { render, screen } from '@testing-library/react';
import ContainerHomePage from '.';

describe('', () => {
  it('', () => {
    render(<ContainerHomePage />);
    const logo = screen.getByRole('img', { name: 'logo Routinely' });
    expect(logo).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
    expect(buttons[0]).toHaveTextContent('Recursos');
    expect(buttons[1]).toHaveTextContent('Planos');
    expect(buttons[2]).toHaveTextContent('Acesse');
    expect(buttons[3]).toHaveTextContent('Teste de graça');

    const headding = screen.getByRole('heading', {
      name: 'Domine sua rotina e conquiste o dia com nossa ferramenta Routinely.',
    });
    expect(headding).toBeInTheDocument();

    const paragraph = screen.getByText(
      'Simplifique sua vida, alcance seus objetivos e encontre equilíbrio com nossa ferramenta de organização de rotina pessoal.',
    );
    expect(paragraph).toBeInTheDocument();

    const image1 = screen.getByAltText('imagem inicial da home page');
    const image2 = screen.getByAltText('Icone de download');

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
