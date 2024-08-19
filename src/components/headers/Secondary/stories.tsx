import SecondaryHeader from '.';
import type { IMenuItem } from '../MenuHeader';

export default {
  title: 'headers/SecondaryHeader',
  component: SecondaryHeader,
  argTypes: {
    children: { type: 'string' },
  },
};

const menuItems: IMenuItem[] = [
  {
    name: 'Recursos',
    url: '#',
    id: 1,
  },
  {
    name: 'Planos',
    url: '#',
    id: 2,
  },
];

export const Template = (args: { menuItems: IMenuItem[] }) => {
  return <SecondaryHeader {...args} hrefBackPage="/back" hasUser={true} />;
};

Template.args = {
  menuItems,
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
