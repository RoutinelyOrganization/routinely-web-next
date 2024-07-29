import { render, screen } from '@testing-library/react';
import PrimaryHeader from '.';
import type { IMenuItem } from '../MenuHeader';
describe('PrimaryHeader', () => {
  const menuItems: IMenuItem[] = [
    { name: 'Home', id: 1, url: '/' },
    { name: 'About', id: 2, url: '/about' },
  ];
  it('should render container component', () => {
    const { container } = render(<PrimaryHeader menuItems={menuItems} hasUser={true} />);
    const containerElement = container.querySelector('.container-main');
    expect(containerElement).toBeInTheDocument();
  });
  it('should render the Logo component', () => {
    render(<PrimaryHeader menuItems={menuItems} />);
    const logoElement = screen.getByAltText('logo Routinely');
    expect(logoElement).toBeInTheDocument();
  });
  //O texto "Notificações vem do componente de imagem do "MenuHeader". Caso o alt desse componente alterar, o teste irá apresentar erro
  it('should render MenuHeader Component hasUser if true', () => {
    render(<PrimaryHeader menuItems={menuItems} hasUser={true} />);
    expect(screen.getByAltText('notificações')).toBeInTheDocument();
  });
  //O texto "Notificações vem do componente de imagem do "MenuHeader". Caso o alt desse componente alterar, o teste irá apresentar erro
  it('should not render MenuHeader Component hasUser if false', () => {
    render(<PrimaryHeader menuItems={menuItems} hasUser={false} />);
    expect(screen.queryByAltText('notificações')).not.toBeInTheDocument();
  });
});
