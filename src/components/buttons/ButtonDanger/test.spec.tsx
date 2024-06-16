import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ButtonDanger from '.';



describe('ButtonDanger Component', () => {
  it('should render ButtonDanger with correct text', () => {
    render(<ButtonDanger>Teste</ButtonDanger>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Teste');
  });

	it('should handle onClick event', () => {
    const handleClick = jest.fn(); // Mocking a function
    render(<ButtonDanger onClick={handleClick}>Teste</ButtonDanger>);
    const button = screen.getByRole('button');

    fireEvent.click(button); // Simulating a click event

    expect(handleClick).toHaveBeenCalledTimes(1); // Verifying if handleClick was called once
  });
});
