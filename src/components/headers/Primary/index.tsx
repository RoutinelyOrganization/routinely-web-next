import Logo from '@/components/logos/Logo';
import type { IMenuItem } from '../MenuHeader';
import MenuHeader from '../MenuHeader';
import * as S from './styles';

export interface IPrimaryHeader {
  menuItems: IMenuItem[];
  hasUser?: boolean;
}

export default function PrimaryHeader({ menuItems, hasUser = false }: IPrimaryHeader) {
  return (
    <S.PrimaryHeader>
      <div className="container-main">
        <Logo />
        {hasUser && <MenuHeader menuItems={menuItems} />}
      </div>
    </S.PrimaryHeader>
  );
}
