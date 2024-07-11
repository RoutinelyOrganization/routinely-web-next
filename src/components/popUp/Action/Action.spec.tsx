import { render, screen } from '@testing-library/react';
import Action from '.';

describe('Test Action', () => {
  it('should render Action with options', () => {
    render(<Action options>Você aceita esse teste?</Action>);
    const Component = screen.getByTestId('popUp');
    const Message = screen.getByText('Você aceita esse teste?');
    const [Primary, Danger] = screen.getAllByRole('button');

    expect(Component).toBeInTheDocument();
    expect(Message).toBeInTheDocument();
    expect(Primary).toBeInTheDocument();
    expect(Primary).toHaveTextContent('Sim');
    expect(Danger).toBeInTheDocument();
    expect(Danger).toHaveTextContent('Não');
  });

  it('should render with button primary and without options', () => {
    render(<Action button="primary">Você aceita esse teste?</Action>);
    const Primary = screen.getByRole('button');

    expect(Primary).toBeInTheDocument();
    expect(Primary).toHaveTextContent('Ok');
  });

  it('should render with button danger and without options', () => {
    render(<Action button="danger">Você aceita esse teste?</Action>);
    const Danger = screen.getByRole('button');

    expect(Danger).toBeInTheDocument();
    expect(Danger).toHaveTextContent('Voltar');
  });
});
