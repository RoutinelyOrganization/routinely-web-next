import { render, screen } from '@testing-library/react';
import ConfirmAction from '.';

describe('Test ConfirmAction', () => {
  it('should render ConfirmAction', () => {
    render(<ConfirmAction>Você aceita esse teste?</ConfirmAction>);
    const Component = screen.getByTestId('popUp');
    const Message = screen.getByText('Você aceita esse teste?');
    const [Primary, Danger] = screen.getAllByRole('button');

    expect(Component).toBeInTheDocument();
    expect(Message).toBeInTheDocument();
    expect(Primary).toBeInTheDocument();
    expect(Danger).toBeInTheDocument();
  });
});
