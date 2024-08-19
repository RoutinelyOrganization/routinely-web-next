import type { IPopUpProps } from '.';
import PopUp from '.';

export default {
  title: 'PopUp',
  component: PopUp,
};

export const Template = (args: IPopUpProps) => {
  return <PopUp {...args}>Testando</PopUp>;
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
