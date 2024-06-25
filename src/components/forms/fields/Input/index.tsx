import type { UseFormRegisterReturn } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import * as S from './styles';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  label?: string;
  id: string;
  register?: UseFormRegisterReturn<string>;
  hasError?: boolean;
  errorMessage?: string;
  as?: React.ElementType;
}

export default function Input({
  children,
  id,
  label,
  register,
  hasError,
  errorMessage,
  as,
  ...props
}: IInput) {
  return (
    <S.Div>
      <S.InputContainer $hasErro={hasError}>
        <S.InputStyle as={as} $hasErro={hasError} id={id} role="textbox" {...register} {...props} />
        <S.LabelInput>
          <S.BorderWhite></S.BorderWhite>
          <S.Label htmlFor={id}>{label}</S.Label>
        </S.LabelInput>
        <S.Children>{children}</S.Children>
      </S.InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </S.Div>
  );
}
