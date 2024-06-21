import { render, screen } from '@testing-library/react';
import LogoShared from '.';

jest.unmock('next/image');
jest.mock('@public/icons/logoHorizontalSecondary.svg', () => ({
  src: 'mocked-icon.svg',
  height: 24,
  width: 24,
}));

describe('Test LogoShared', () => {
  it('should render LogoShared component with correct alt text', () => {
    render(<LogoShared />);
    const logoElement = screen.getByAltText('logo Routinely');
    expect(logoElement).toBeInTheDocument();
  });

  it('should render LogoShared component with correct src', () => {
    render(<LogoShared />);
    const logoElement = screen.getByAltText('logo Routinely');
    expect(logoElement).toHaveAttribute('src', 'mocked-icon.svg');
  });
});
