import { render, screen } from '@testing-library/react';
import ButtonSecondary from '.';

describe('ButtonSecondary Component', () => {
  it('should show the ButtonSecondary with the href', () => {
    render(<ButtonSecondary href="/home">ButtonSecondary</ButtonSecondary>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('ButtonSecondary');
    expect(button.closest('a')).toHaveAttribute('href', '/home');
  });

  it('should show the ButtonPrimary without href', () => {
    render(<ButtonSecondary>ButtonSecondary</ButtonSecondary>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('ButtonSecondary');
    expect(button.closest('a')).not.toBeInTheDocument();
  });
});
