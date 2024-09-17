import * as S from './styles';

export default function ButtonFooter({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <S.ButtonFooter {...props} role="button" data-testid="button-footer">
      {children}
    </S.ButtonFooter>
  );
}
