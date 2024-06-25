import type { ICheckBox } from '.';
import Checkbox from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const Template = (args: ICheckBox) => {
  return (
    <div>
      <Checkbox {...args} />
    </div>
  );
};
