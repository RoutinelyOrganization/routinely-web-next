import prev from '@public/icons/navegação_anterior.svg';
import next from '@public/icons/navigação_próximo.svg';
import Image from 'next/image';
import * as S from './styles';

export interface IContainerPrevNextProps {
  onChange: (value: 'prev' | 'next') => void;
}
export default function ContainerPrevNext({ onChange }: IContainerPrevNextProps) {
  return (
    <S.Container>
      <Image src={prev} alt="Icone para voltar" onClick={() => onChange('prev')} />
      <span></span>
      <Image src={next} alt="Icone para avançar" onClick={() => onChange('next')} />
    </S.Container>
  );
}
