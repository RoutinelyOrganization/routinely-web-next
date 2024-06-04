import ErrorMessage from '@/components/forms/fields/ErrorMessage';
import * as S from './styles';

export interface IErrorApiContainer {
  errorMessages: string[];
}
export default function ErrorApiContainer({ errorMessages }: IErrorApiContainer) {
  return (
    <S.ContainerErrors>
      {errorMessages.map((message, index) => (
        <ErrorMessage key={index}>{message}</ErrorMessage>
      ))}
    </S.ContainerErrors>
  );
}
