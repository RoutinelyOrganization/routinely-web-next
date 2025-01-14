'use client';

import { makeLogout } from '@/factories/services/makeLogout';
import { signOut, useSession } from 'next-auth/react';
import type { IMenuItem } from './MenuHeader';
import PrimaryHeader from './Primary';
import SecondaryHeader from './Secondary';

export interface IHeader {
  header?: 'primary' | 'secondary';
  hrefBackPage?: string;
}

export default function Header({ header = 'primary', hrefBackPage = '/' }: IHeader) {
  const { data: session } = useSession();

  const menuItems: IMenuItem[] = [
    {
      name: 'Sair da conta',
      id: 1,
      onClick: async () => {
        await makeLogout(session?.user?.token!);
        await signOut({ callbackUrl: '/' });
      },
    },
  ];

  return header === 'primary' ? (
    <PrimaryHeader menuItems={menuItems} hasUser={!!session?.user} />
  ) : (
    <SecondaryHeader menuItems={menuItems} hrefBackPage={hrefBackPage} hasUser={!!session?.user} />
  );
}
