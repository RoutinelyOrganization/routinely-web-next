import { render, screen } from '@testing-library/react';
import ErrorApiContainer from './index';

describe('ErrorApiContainer Component', () => {
  const setup = (errorMessages: string[] = []) =>
    render(<ErrorApiContainer errorMessages={errorMessages} />);

  it('should render all error messages', () => {
    const errorMessages = ['Error 1', 'Error 2', 'Error 3'];
    setup(errorMessages);

    errorMessages.forEach(message => {
      expect(screen.getByText(message)).toBeInTheDocument();
    });
  });

  it('should render the correct number of error messages', () => {
    const errorMessages = ['Error 1', 'Error 2'];
    setup(errorMessages);

    const renderedMessages = screen.getAllByRole('generic');
    expect(renderedMessages.length).toBe(errorMessages.length);
  });

  it('should render nothing when there are no error messages', () => {
    setup();

    expect(screen.queryByText(/Erro/)).toBeNull();
  });
});
