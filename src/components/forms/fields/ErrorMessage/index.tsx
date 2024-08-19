import * as S from './styles';

export interface IErrorMessage {
  children: string;
}

export default function ErrorMessage({ children }: IErrorMessage) {
  const formatedMessage = children[0].toUpperCase() + children.slice(1);
  return <S.ErrorMessage aria-label="message-error">{formatedMessage}</S.ErrorMessage>;
}
