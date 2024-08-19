import { fireEvent, render, screen } from '@testing-library/react';
import ContainerPrevNext from '.';

const onChangeMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<ContainerPrevNext/>', () => {
  it('should render', () => {
    render(<ContainerPrevNext onChange={onChangeMock} />);
    const [prev, next] = screen.getAllByRole('img');
    expect(prev).toHaveAttribute('alt', 'Icone para voltar');
    expect(next).toHaveAttribute('alt', 'Icone para avançar');
  });

  it('should call onChange function with value "prev"', () => {
    render(<ContainerPrevNext onChange={onChangeMock} />);
    const prev = screen.getByRole('img', { name: 'Icone para voltar' });
    fireEvent.click(prev);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('prev');
  });

  it('should call onChange function with value "next"', () => {
    render(<ContainerPrevNext onChange={onChangeMock} />);
    const next = screen.getByRole('img', { name: 'Icone para avançar' });
    fireEvent.click(next);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('next');
  });
});
