import type { IWarningAction } from '.';
import WarningAction from '.';

export default {
  title: 'WarningAction',
  component: WarningAction,
};

export const Template = (args: IWarningAction) => {
  return (
    <WarningAction {...args}>A alteração não pode ser salva, verifique seus dados</WarningAction>
  );
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
