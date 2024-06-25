import { render, screen } from '@testing-library/react';
import LogoShared from '.';

describe('Test LogoShared', () => {
  it('should render LogoShared component with correct alt text', () => {
    render(<LogoShared />);
    const logoElement = screen.getByAltText('logo Routinely');
    expect(logoElement).toBeInTheDocument();
  });
});
