import * as S from './styles';

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  hover?: boolean;
  secondaryColor?: boolean;
  href?: string;
};

export default function ButtonPrimary({
  children,
  hover = true,
  secondaryColor,
  href,
  ...props
}: IButton) {
  return (
    <>
      {href ? (
        <S.LinkNext href={href}>
          <S.Button {...props} $hover={hover} $secondaryColor={secondaryColor}>
            {children}
          </S.Button>
        </S.LinkNext>
      ) : (
        <S.Button {...props} $hover={hover} $secondaryColor={secondaryColor}>
          {children}
        </S.Button>
      )}
    </>
  );
}
