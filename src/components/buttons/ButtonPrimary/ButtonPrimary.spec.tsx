import { render, screen } from '@testing-library/react';
import ButtonPrimary from '.';

describe('ButtonPrimary Component', () => {
  it('should show the ButtonPrimary with the href', () => {
    render(<ButtonPrimary href="/home">ButtonPrimary</ButtonPrimary>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('ButtonPrimary');
    expect(button.closest('a')).toHaveAttribute('href', '/home');
  });

  it('should show the ButtonPrimary without href', () => {
    render(<ButtonPrimary>ButtonPrimary</ButtonPrimary>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('ButtonPrimary');
    expect(button.closest('a')).not.toBeInTheDocument();
  });
});
