import { categories } from '@/constants/categories';
import { render, screen } from '@testing-library/react';
import CategorySelect from '.';

describe('<CategorySelect/>', () => {
  it('should render', () => {
    render(<CategorySelect />);
    const select = screen.getByRole('combobox');
    const options = select.querySelectorAll('option');

    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(categories.length + 1);

    // retiranso o index 0 que é um valor defaul disable
    const [, ...optionsRest] = options;
    optionsRest.forEach(option => {
      expect(categories).toContain(option.value);
    });
  });

  it('should render initialValue', () => {
    render(<CategorySelect initailValue={categories[2]} />);
    const select = screen.getByRole('combobox');

    expect(select).toHaveValue(categories[2]);
  });

  it('should render error message', () => {
    render(<CategorySelect messageError="teste" />);
    const errorMessage = screen.getByText(/teste/i);

    expect(errorMessage).toBeInTheDocument();
  });
});
