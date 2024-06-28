import type { IConfirmAction } from '.';
import ConfirmAction from '.';

export default {
  title: 'ConfirmAction',
  component: ConfirmAction,
};

export const Template = (args: IConfirmAction) => {
  return <ConfirmAction {...args}>Tem certeza que deseja realizar esta ação?</ConfirmAction>;
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
