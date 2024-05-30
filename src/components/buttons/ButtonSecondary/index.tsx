import * as S from './styles';

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  href?: string;
};

export default function ButtonSecondary({ children, href, ...props }: IButton) {
  return (
    <>
      {href ? (
        <S.LinkNext href={href}>
          <S.Button {...props}>{children}</S.Button>
        </S.LinkNext>
      ) : (
        <S.Button {...props}>{children}</S.Button>
      )}
    </>
  );
}
