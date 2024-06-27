import { act, render, screen } from '@testing-library/react';
import media from '@/styles/mediaQueries';
import PopUp from '.';

describe('Test popUp', () => {
  it('should render popUp', () => {
    render(<PopUp>Testando</PopUp>);
    const Component = screen.getByTestId('popUp');
    expect(Component).toHaveTextContent('Testando');
    expect(Component).toBeInTheDocument();
  });

  it('should render button footer if resolution is mobile', async () => {
    render(<PopUp>Testando</PopUp>);

    await act(async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: media.mobile, // Define a largura desejada para este teste
      });
      window.dispatchEvent(new Event('resize'));
    });

    const Button = screen.getByTestId('button-footer');
    expect(Button).toBeInTheDocument();
  });
});
