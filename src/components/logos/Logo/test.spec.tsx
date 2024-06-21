import { render, screen } from '@testing-library/react';
import Logo from '.';

jest.unmock('next/image');
jest.mock('@public/icons/logo_horizontal.svg', () => ({
  src: 'mocked-icon.svg',
  height: 24,
  width: 24,
}));

describe('Test Logo', () => {
  it('should render Logo component with correct alt text', () => {
    render(<Logo />);
    const logoElement = screen.getByAltText('logo Routinely');
    expect(logoElement).toBeInTheDocument();
  });

  it('should render Logo component with a link', () => {
    render(<Logo />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
  });

  it('should render Logo component with correct src', () => {
    render(<Logo />);
    const logoElement = screen.getByAltText('logo Routinely');
    expect(logoElement).toHaveAttribute('src', 'mocked-icon.svg');
  });

  it('should redirect to the home when logo is clicked', () => {
    render(<Logo />);
    const logoElement = screen.getByRole('link');
    expect(logoElement).toHaveAttribute('href', '/');
  });
});
