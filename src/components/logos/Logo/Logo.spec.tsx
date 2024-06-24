import { render, screen } from '@testing-library/react';
import Logo from '.';

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

  it('should redirect to the home when logo is clicked', () => {
    render(<Logo />);
    const logoElement = screen.getByRole('link');
    expect(logoElement).toHaveAttribute('href', '/');
  });
});
