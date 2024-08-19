import { render, screen } from '@testing-library/react';
import PopUp from '.';

describe('Test popUp', () => {
  it('should render popUp', () => {
    render(<PopUp>Testando</PopUp>);
    const Component = screen.getByTestId('popUp');
    expect(Component).toHaveTextContent('Testando');
    expect(Component).toBeInTheDocument();
  });
});
