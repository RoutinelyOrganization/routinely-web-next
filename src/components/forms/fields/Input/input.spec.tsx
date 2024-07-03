import { render, screen } from '@testing-library/react';
import Input from '.';

describe('<Input/>', () => {
  it('should render', () => {
    render(<Input id="test" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should render label', () => {
    render(<Input id="test" label="test" />);
    const label = screen.getByLabelText('test');
    expect(label).toBeInTheDocument();
  });

  it('should render placeholder', () => {
    render(<Input id="test" placeholder="test" />);
    const placeholder = screen.getByPlaceholderText('test');
    expect(placeholder).toBeInTheDocument();
  });

  it('should render error message', async () => {
    render(<Input id="test" hasError errorMessage="test" />);
    const error = await screen.findByText('Test');
    expect(error).toBeInTheDocument();
  });

  it('should render child', () => {
    render(
      <Input id="test">
        <p>test</p>
      </Input>,
    );
    const child = screen.getByText('test');
    expect(child).toBeInTheDocument();
  });
});
