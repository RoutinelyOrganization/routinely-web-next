import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonFooter from '.';

describe('ButtonFooter Component', () => {
	window.innerWidth = 500;

  it('should show the button if the window width is less than 500px', () => {
    render(<ButtonFooter />);
    const button = screen.getByRole('button', { hidden: true });
    expect(button).toBeInTheDocument();
		const img = screen.getByRole('img', { hidden: true });
    expect(img).toBeInTheDocument();
  });
});



