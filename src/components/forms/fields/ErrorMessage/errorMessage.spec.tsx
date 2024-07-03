import { render, screen } from '@testing-library/react';
import ErrorMessage from '.';

describe('<ErrorMessage/>', () => {
  it('should render', () => {
    render(<ErrorMessage>Children</ErrorMessage>);
    const heading = screen.getByRole('paragraph');
    expect(heading).toHaveTextContent('Children');
  });
});
