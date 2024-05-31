import * as S from './styles';

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  href?: string;
  hover?: boolean;
};

export default function ButtonSecondary({ children, href, hover = true, ...props }: IButton) {
  return (
    <>
      {href ? (
        <S.LinkNext href={href}>
          <S.Button {...props} $hover={hover}>
            {children}
          </S.Button>
        </S.LinkNext>
      ) : (
        <S.Button {...props} $hover={hover}>
          {children}
        </S.Button>
      )}
    </>
  );
}
