import { render, screen } from '@testing-library/react';
import ButtonSocialGoogle from '.';

describe('ButtonSocialGoogle Component', () => {
  it('should show the ButtonPrimary without href', () => {
    render(<ButtonSocialGoogle>ButtonSocialGoogle</ButtonSocialGoogle>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('ButtonSocialGoogle');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
});
