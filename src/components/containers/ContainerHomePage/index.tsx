import ButtonDownloadApp from '@/components/buttons/ButtonDownloadApp';
import ButtonPrincipal from '@/components/buttons/ButtonPrimary';
import type { IMenuItem } from '@/components/headers/MenuHeader';
import MenuHeader from '@/components/headers/MenuHeader';
import Logo from '@/components/logos/Logo';
import completedTasks from '@public/imagens/homePage/completed_tasks.svg';
import completedTasksLitlle from '@public/imagens/homePage/completed_tasks_menor.svg';
import homePageBanner from '@public/imagens/homePage/homePageBanner.svg';
import Image from 'next/image';
import * as S from './styles';

export default function ContainerHomePage() {
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

  return (
    <>
      <S.Header>
        <div className="container-main">
          <Logo />
          <S.ContainerButtonsHeader>
            <ButtonPrincipal className="d-none-mobile" hover={false}>
              Recursos
            </ButtonPrincipal>
            <ButtonPrincipal className="d-none-mobile" hover={false}>
              Planos
            </ButtonPrincipal>
            <ButtonPrincipal secondaryColor={true} href="/welcome">
              Acesse
            </ButtonPrincipal>
            <MenuHeader menuItems={menuItems} />
          </S.ContainerButtonsHeader>
        </div>
      </S.Header>

      <S.Main className="container-main">
        <S.Title>Domine sua rotina e conquiste o dia com nossa ferramenta Routinely.</S.Title>
        <S.ContainerCaptionImg>
          <div>
            <S.Caption>
              Simplifique sua vida, alcance seus objetivos e encontre equilíbrio com nossa
              ferramenta de organização de rotina pessoal.
            </S.Caption>
            <S.Button>Teste de graça</S.Button>
          </div>
          <Image className="desktop" src={homePageBanner} alt="imagem inicial da home page" />
          <Image className="tablet-horizontal" src={completedTasks} alt="tarefas concluídas" />
          <Image className="tablet-vertical" src={completedTasksLitlle} alt="tarefas concluídas" />
        </S.ContainerCaptionImg>
        <hr />
        <ButtonDownloadApp />
      </S.Main>
    </>
  );
}
