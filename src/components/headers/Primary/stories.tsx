import PrimaryHeader from '.';
import type { IMenuItem } from '../MenuHeader';

export default {
  title: 'headers/PrimaryHeader',
  component: PrimaryHeader,
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
  return <PrimaryHeader {...args} hasUser={true} />;
};

Template.args = {
  menuItems,
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
