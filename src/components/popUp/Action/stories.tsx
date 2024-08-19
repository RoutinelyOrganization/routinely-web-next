import type { IAction } from '.';
import Action from '.';

export default {
  title: 'popup/Action',
  component: Action,
};

export const Template = (args: IAction) => {
  return <Action {...args}>Tem certeza que deseja realizar esta ação?</Action>;
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
