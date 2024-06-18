import React, { ImgHTMLAttributes, act } from 'react';
import { render, screen } from '@testing-library/react';
import ButtonEdit from '.';


jest.mock('next/image', () => ({
  ...jest.requireActual('next/image'),
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt, ...rest } = props;
    return <img src={typeof src === 'string' ? src : ''} alt={alt || ''} {...rest} />;
  },
}));

describe('ButtonEdit Component', () => {
  window.innerWidth = 500;

  it('should show the button if the window width is less than 500px', () => {
    render(<ButtonEdit />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    // expect(button).toHaveTextContent('Baixe o aplicativo do Routinely');
  });

});
