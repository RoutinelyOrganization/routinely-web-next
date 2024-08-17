import { render, screen } from '@testing-library/react';
import Action from '.';

const textParagraph = 'Jest test';
const textButtonPrimary = 'Yes';
const textButtonDanger = 'No';

describe('Test Action', () => {
  it('should render Action with primary button and danger button', () => {
    render(
      <Action textButtonDanger={textButtonDanger} textButtonPrimary={textButtonPrimary}>
        Jest test
      </Action>,
    );
    const Component = screen.getByTestId('popUp');
    const Message = screen.getByRole('paragraph');
    const [Primary, Danger] = screen.getAllByRole('button');

    expect(Component).toBeInTheDocument();
    expect(Message).toHaveTextContent(textParagraph);
    expect(Primary).toHaveTextContent(textButtonPrimary);
    expect(Danger).toHaveTextContent(textButtonDanger);
  });

  it('should render with primary button and without danger button', () => {
    render(<Action textButtonPrimary={textButtonPrimary}>{textParagraph}</Action>);
    const Primary = screen.getByRole('button', { name: textButtonPrimary });
    const Danger = screen.queryByRole('button', { name: textButtonDanger });

    expect(Primary).toBeInTheDocument();
    expect(Danger).not.toBeInTheDocument();
    expect(Primary).toHaveTextContent(textButtonPrimary);
  });

  it('should render with button danger and without primary button', () => {
    render(<Action textButtonDanger={textButtonDanger}>{textParagraph}</Action>);
    const Danger = screen.getByRole('button', { name: textButtonDanger });
    const Primary = screen.queryByRole('button', { name: textButtonPrimary });

    expect(Danger).toBeInTheDocument();
    expect(Primary).not.toBeInTheDocument();
    expect(Danger).toHaveTextContent(textButtonDanger);
  });
});
