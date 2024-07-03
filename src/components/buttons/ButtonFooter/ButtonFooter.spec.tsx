import { render } from '@testing-library/react';
import ButtonFooter from '.';

describe('ButtonFooter Component', () => {
  it('should render according to the snapshot', () => {
    const { container } = render(<ButtonFooter />);
    expect(container).toMatchSnapshot();
  });
});
