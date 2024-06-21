import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonFooter from '.';

jest.unmock('next/image');
jest.mock('@public/imagens/início.svg', () => ({
  src: 'mocked-início.svg',
  height: 24,
  width: 24,
}));


describe('ButtonFooter Component', () => {
  it('should show the button if the window width is less than 500px', () => {
		window.innerWidth = 500;
    render(<ButtonFooter />);
    const button = screen.getByRole('button', { hidden: true });
    expect(button).toBeInTheDocument();
		const img = screen.getByRole('img', { hidden: true });
    expect(img).toBeInTheDocument();
  });
});
