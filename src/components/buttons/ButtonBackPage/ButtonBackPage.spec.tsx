import { render, screen } from '@testing-library/react';
import ButtonBackPage from '.';

describe('Test ButtonBackPage', () => {
  it('should render ButtonBackPage with link', () => {
    render(<ButtonBackPage href="/home" />);
    const button = screen.getByRole('button');
    expect(screen.getByText('Voltar')).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/home');
  });

  it('should render ButtonBackPage without the link', () => {
    render(<ButtonBackPage />);
    const button = screen.getByRole('button');
    expect(screen.getByText('Voltar')).toBeInTheDocument();
    expect(button.closest('a')).toBeNull();
  });
});
