import ButtonBackPage from '@/components/buttons/ButtonBackPage';
import Logo from '@/components/logos/Logo';
import type { IMenuItem } from '../MenuHeader';
import MenuHeader from '../MenuHeader';
import * as S from './styles';

export interface IPrimaryHeader {
  menuItems: IMenuItem[];
  hasUser?: boolean;
  hrefBackPage?: string;
}

export default function PrimaryHeader({
  menuItems,
  hrefBackPage,
  hasUser = false,
}: IPrimaryHeader) {
  return (
    <S.PrimaryHeader>
      <div className="container-main">
        <S.ContainerLogoBackPage>
          <ButtonBackPage href={hrefBackPage} />
          <Logo />
        </S.ContainerLogoBackPage>
        {hasUser && <MenuHeader menuItems={menuItems} />}
      </div>
    </S.PrimaryHeader>
  );
}
