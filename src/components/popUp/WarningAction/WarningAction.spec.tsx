import { render, screen } from '@testing-library/react';
import WarningAction from '.';

describe('Test WarningAction', () => {
  it('should render WarningAction', () => {
    render(<WarningAction button="danger">Você aceita esse teste?</WarningAction>);
    const Component = screen.getByTestId('popUp');
    const Message = screen.getByText('Você aceita esse teste?');
    const Danger = screen.getByRole('button');

    expect(Component).toBeInTheDocument();
    expect(Message).toBeInTheDocument();
    expect(Danger).toBeInTheDocument();
    expect(Danger).toHaveTextContent('Voltar');
  });

  it('should render with button primary', () => {
    render(<WarningAction button="primary">Você aceita esse teste?</WarningAction>);
    const Primary = screen.getByRole('button');

    expect(Primary).toBeInTheDocument();
    expect(Primary).toHaveTextContent('Ok');
  });
});
