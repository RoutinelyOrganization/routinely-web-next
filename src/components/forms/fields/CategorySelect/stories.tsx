import type { ICategorySelectProps } from '.';
import CategorySelect from '.';

export default {
  title: 'CategorySelect',
  component: CategorySelect,

  argTypes: {
    initailValue: { type: 'string' },
    messageError: { type: 'string' },
  },
};

export const Template = (args: ICategorySelectProps) => {
  return (
    <div>
      <CategorySelect {...args} />
    </div>
  );
};

Template.parameters = {
  backgrounds: {
    default: 'white',
  },
};
