import type { IErrorApiContainer } from '.';
import ErrorApiContainer from '.';

export default {
  title: 'containers/ErrorApiContainer',
  component: ErrorApiContainer,
  argTypes: {
    errorMessages: {
      control: {
        type: 'array',
      },
    },
  },
  args: {
    errorMessages: ['Error message 1', 'Error message 2'],
  },
};

export const Template = (args: IErrorApiContainer) => <ErrorApiContainer {...args} />;
