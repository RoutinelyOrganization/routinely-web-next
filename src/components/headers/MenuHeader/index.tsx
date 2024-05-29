'use client';

import bellNotificationIcon from '@public/icons/bellNotification.svg';
import closeMenuIcon from '@public/icons/closeMenuHeader.svg';
import hamburguerIcon from '@public/icons/hamburguer.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import * as S from './styles';

export interface IMenuItem {
  name: string;
  url: string;
  id: number;
}

export interface IMenuHeader {
  menuItems: IMenuItem[];
}

export default function MenuHeader({ menuItems }: IMenuHeader) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <S.Container>
      <S.ContainerIcons>
        <Image src={bellNotificationIcon} alt="notificações" role="icon" />
        <Image
          src={hamburguerIcon}
          alt="abrir menu"
          role="icon"
          onClick={() => setIsShowMenu(true)}
        />
      </S.ContainerIcons>
      {isShowMenu && (
        <S.Wrapper>
          <div>
            <Image
              src={closeMenuIcon}
              alt="fechar menu"
              onClick={() => setIsShowMenu(false)}
              role="icon"
            />
          </div>
          <S.List>
            {menuItems.map(menuItem => (
              <S.Item key={menuItem.id}>
                <Link href={menuItem.url}>{menuItem.name}</Link>
              </S.Item>
            ))}
          </S.List>
        </S.Wrapper>
      )}
    </S.Container>
  );
}
