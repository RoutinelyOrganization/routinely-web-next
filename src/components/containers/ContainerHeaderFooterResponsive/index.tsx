import ButtonFooter from '@/components/buttons/ButtonFooter';
import Header from '@/components/headers';
import newTask from '@public/imagens/nova tarefa.svg';
import Image from 'next/image';
import * as S from './styles';

export interface IContainerHeaderFooterMobileResponsiveProps {
  children: React.ReactNode;
}

export default function ContainerHeaderFooterMobileResponsive({
  children,
}: IContainerHeaderFooterMobileResponsiveProps) {
  return (
    <S.Container>
      <Header />
      {children}
      <ButtonFooter>
        <Image src={newTask} alt="Nova tarefa" />
      </ButtonFooter>
    </S.Container>
  );
}
