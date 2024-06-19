import React, { ImgHTMLAttributes, act } from 'react';
import { render, screen } from '@testing-library/react';
import ButtonEdit from '.';

describe('ButtonEdit Component', () => {
  window.innerWidth = 500;

  it('should show the button if the window width is less than 500px', () => {
    render(<ButtonEdit />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
