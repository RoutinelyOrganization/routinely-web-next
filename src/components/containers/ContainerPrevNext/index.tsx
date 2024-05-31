import prev from '@public/icons/navegação_anterior.svg';
import next from '@public/icons/navigação_próximo.svg';
import Image from 'next/image';
import * as S from './styles';

interface IContainerPrevNextProps {
  setChangePage: React.Dispatch<React.SetStateAction<'prev' | 'next' | null>>;
}
export default function ContainerPrevNext({ setChangePage }: IContainerPrevNextProps) {
  return (
    <S.Container>
      <Image src={prev} alt="Icone para voltar" onClick={() => setChangePage('prev')} />
      <span></span>
      <Image src={next} alt="Icone para avançar" onClick={() => setChangePage('next')} />
    </S.Container>
  );
}
