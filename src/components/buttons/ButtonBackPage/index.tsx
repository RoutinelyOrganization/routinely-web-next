import backPageIcon from '@public/icons/buttonBackPage.svg';
import Image from 'next/image';
import * as S from './styles';

interface IButtonBackPage extends React.HTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export default function ButtonBackPage({ href, ...props }: IButtonBackPage) {
  return href ? (
    <S.LinkNext href={href}>
      <S.ButtonBackPage {...props}>
        <Image src={backPageIcon} alt="Voltar" role="icon" />
        <p>Voltar</p>
      </S.ButtonBackPage>
    </S.LinkNext>
  ) : (
    <S.ButtonBackPage {...props}>
      <Image src={backPageIcon} alt="Voltar" role="icon" />
      <p className="mobile">Voltar</p>
    </S.ButtonBackPage>
  );
}
