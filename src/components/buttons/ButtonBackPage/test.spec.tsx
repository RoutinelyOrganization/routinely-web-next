import { render, screen } from '@testing-library/react';
import ButtonBackPage from '.';
import { ImgHTMLAttributes } from 'react';
// Mock do ícone
jest.mock('@public/icons/buttonBackPage.svg', () => ({
  src: 'mocked-icon.svg',
  height: 24,
  width: 24,
}));

jest.mock('next/image', () => ({
  ...jest.requireActual('next/image'),
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt, ...rest } = props;
    return <img src={typeof src === 'string' ? src : ''} alt={alt || ''} {...rest} />;
  },
}));

describe('Test ButtonBackPage', () => {
  it('should render ButtonBackPage with link', () => {
    render(<ButtonBackPage href="/home"/>);
    const button = screen.getByRole('button');
    expect(screen.getByText('Voltar')).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/home');
  });

	it('should render ButtonBackPage without the link', () => {
    render(<ButtonBackPage/>);
    const button = screen.getByRole('button');
    expect(screen.getByText('Voltar')).toBeInTheDocument();
    expect(button.closest('a')).toBeNull();
  });


});
