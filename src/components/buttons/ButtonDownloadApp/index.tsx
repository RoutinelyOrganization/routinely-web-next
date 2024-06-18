import DownlodIcon from '@public/icons/download.svg';
import Image from 'next/image';
import * as S from './styles';

export default function ButtonDownloadApp() {
  return (
    <S.ButtonApp>
      <Image src={DownlodIcon} alt="Icone de download" />
      Baixe o aplicativo do Routinely
    </S.ButtonApp>
  );
}
