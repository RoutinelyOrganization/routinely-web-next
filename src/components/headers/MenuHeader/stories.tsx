import type { IMenuItem } from '.';
import MenuHeader from '.';

export default {
  title: 'headers/MenuHeader',
  component: MenuHeader,
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
  return <MenuHeader {...args} />;
};

Template.args = {
  menuItems,
};

Template.parameters = {
  backgrounds: { default: 'secondary' },
};
