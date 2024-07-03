import { fireEvent, render, screen } from '@testing-library/react';
import CustonCheckedBox from '.';

describe('<CustonCheckedBox/>', () => {
  it('should render', () => {
    render(<CustonCheckedBox id="teste" />);
    const checkbox = screen.getByTestId('checkbox');
    const image = screen.getByAltText('check marcado');

    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(image).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('should render with correcty values', () => {
    render(<CustonCheckedBox id="teste" checked={true} value={'S'} />);

    const checkbox = screen.getByTestId('checkbox');

    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('value', 'S');
  });

  it('should change checkbox', () => {
    render(<CustonCheckedBox id="teste" />);

    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).not.toBeChecked();

    const spanInput = screen.getByLabelText('checkbox');

    fireEvent.click(spanInput);

    expect(checkbox).toBeChecked();
  });
});
