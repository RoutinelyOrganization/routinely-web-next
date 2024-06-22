import { render, screen } from '@testing-library/react';
import ButtonEdit from '.';

describe('ButtonEdit Component', () => {

  it('should show the ButtonEdit', () => {
    render(<ButtonEdit />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
