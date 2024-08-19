import type { IErrorMessage } from '.';
import ErrorMessage from '.';

export default {
  title: 'forms/fields/ErrorMessage',
  component: ErrorMessage,
  args: {
    children: 'Storybook',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: IErrorMessage) => {
  return (
    <div>
      <ErrorMessage {...args} />
    </div>
  );
};
