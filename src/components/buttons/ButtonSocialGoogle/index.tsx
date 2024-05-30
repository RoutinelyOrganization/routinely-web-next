import IconGoogle from '@public/icons/IconGoogle';
import React from 'react';
import * as S from './styles';

type IButtonSocial = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};

export default function ButtonSocialGoogle({ children }: IButtonSocial) {
  return (
    <S.ButtonSocial type="button">
      <IconGoogle />
      {children}
    </S.ButtonSocial>
  );
}
