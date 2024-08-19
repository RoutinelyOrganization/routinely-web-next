import type { ICheckBox } from '.';
import Checkbox from '.';

export default {
  title: 'forms/fields/Checkbox',
  component: Checkbox,
};

export const Template = (args: ICheckBox) => {
  return (
    <div>
      <Checkbox {...args} />
    </div>
  );
};
