import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuHeader from '.';
import type { IMenuItem } from '.';

const mockMenuItems: IMenuItem[] = [
  { name: 'Home', id: 1, url: '/' },
  { name: 'About', id: 2, url: '/about' },
  { name: 'Contact', id: 3, onClick: jest.fn() },
];

describe('MenuHeader', () => {
  it('renders notification and icons', () => {
    render(<MenuHeader menuItems={mockMenuItems} />);

    expect(screen.getByAltText('notificações')).toBeInTheDocument();
    expect(screen.getByAltText('abrir menu')).toBeInTheDocument();
  });

  it('opens menu when icon is clicked', () => {
    render(<MenuHeader menuItems={mockMenuItems} />);

    const Icon = screen.getByAltText('abrir menu');
    fireEvent.click(Icon);

    expect(screen.getByAltText('fechar menu')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('closes menu when close icon is clicked', () => {
    render(<MenuHeader menuItems={mockMenuItems} />);

    const Icon = screen.getByAltText('abrir menu');
    fireEvent.click(Icon);

    const closeIcon = screen.getByAltText('fechar menu');
    fireEvent.click(closeIcon);

    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.queryByText('About')).not.toBeInTheDocument();
    expect(screen.queryByText('Contact')).not.toBeInTheDocument();
  });

  it('calls onClick when menu item with onClick is clicked', () => {
    render(<MenuHeader menuItems={mockMenuItems} />);

    const Icon = screen.getByAltText('abrir menu');
    fireEvent.click(Icon);

    const contactItem = screen.getByText('Contact');
    fireEvent.click(contactItem);

    expect(mockMenuItems[2].onClick).toHaveBeenCalled();
  });

  it('renders Link for menu items with url', () => {
    render(<MenuHeader menuItems={mockMenuItems} />);

    const Icon = screen.getByAltText('abrir menu');
    fireEvent.click(Icon);

    const homeLink = screen.getByText('Home').closest('a');
    const aboutLink = screen.getByText('About').closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
});
