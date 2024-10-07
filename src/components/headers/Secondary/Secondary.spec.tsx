import { render, screen } from '@testing-library/react';
import SecondaryHeader from '.';
import type { IMenuItem } from '../MenuHeader';

describe('SecondaryHeader', () => {
  const menuItems: IMenuItem[] = [
    { name: 'Home', id: 1, url: '/' },
    { name: 'About', id: 2, url: '/about' },
  ];
  it('should render container component', () => {
    const { container } = render(
      <SecondaryHeader hrefBackPage="/back" menuItems={menuItems} hasUser={true} />,
    );
    const containerElement = container.querySelector('.container-main');
    expect(containerElement).toBeInTheDocument();
  });
  it('should render the Logo component', () => {
    render(<SecondaryHeader hrefBackPage="/back" menuItems={menuItems} />);
    const buttonElement = screen.getByAltText('Voltar');
    expect(buttonElement).toBeInTheDocument();
  });
  //O texto "Notificações vem do componente de imagem do "MenuHeader". Caso o alt desse componente alterar, o teste irá apresentar erro
  it('should render MenuHeader Component hasUser if true', () => {
    render(<SecondaryHeader hrefBackPage="/back" menuItems={menuItems} hasUser={true} />);
    expect(screen.getByRole('button', { name: 'Sair' })).toBeInTheDocument();
    expect(screen.getByAltText('abrir menu')).toBeInTheDocument();
  });
  //O texto "Notificações vem do componente de imagem do "MenuHeader". Caso o alt desse componente alterar, o teste irá apresentar erro
  it('should not render MenuHeader Component hasUser if false', () => {
    render(<SecondaryHeader hrefBackPage="/back" menuItems={menuItems} hasUser={false} />);
    expect(screen.queryByRole('button', { name: 'Sair' })).not.toBeInTheDocument();
    expect(screen.queryByAltText('abrir menu')).not.toBeInTheDocument();
  });
});
