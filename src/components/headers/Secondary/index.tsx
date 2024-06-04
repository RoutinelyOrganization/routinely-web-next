import ButtonBackPage from '@/components/buttons/ButtonBackPage';
import type { IMenuItem } from '../MenuHeader';
import MenuHeader from '../MenuHeader';
import * as S from './styles';

export interface ISecondaryHeader {
  menuItems: IMenuItem[];
  hrefBackPage: string;
  hasUser?: boolean;
}

export default function SecondaryHeader({
  menuItems,
  hrefBackPage,
  hasUser = false,
}: ISecondaryHeader) {
  return (
    <S.SecondaryHeader>
      <div className="container-main">
        <ButtonBackPage href={hrefBackPage} />
        {hasUser && <MenuHeader menuItems={menuItems} />}
      </div>
    </S.SecondaryHeader>
  );
}
