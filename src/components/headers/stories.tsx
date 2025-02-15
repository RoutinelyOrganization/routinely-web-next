import { SessionProvider } from 'next-auth/react';
import Header from '.';
import type { IMenuItem } from './MenuHeader';

export default {
  title: 'headers/Header',
  component: Header,
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
  return (
    <SessionProvider>
      {' '}
      <Header header="primary" hrefBackPage="/" {...args} />
    </SessionProvider>
  );
};

Template.args = {
  menuItems,
};

Template.parameters = {
  backgrounds: { default: 'white' },
};
