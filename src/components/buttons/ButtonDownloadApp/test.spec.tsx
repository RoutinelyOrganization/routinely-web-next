import React, { ImgHTMLAttributes, act } from 'react';
import { render, screen } from '@testing-library/react';
import ButtonDownloadApp from '.';

jest.mock('@public/icons/download.svg', () => ({
  src: 'mocked-icon.svg',
  height: 24,
  width: 24,
}));

describe('ButtonDownloadApp Component', () => {
  window.innerWidth = 500;

  it('should show the button if the window width is less than 500px', () => {
    render(<ButtonDownloadApp />);
    const button = screen.getByRole('button', { hidden: true });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Baixe o aplicativo do Routinely');
  });
});
