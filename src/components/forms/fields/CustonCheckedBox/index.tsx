'use client';

import image from '@public/icons/check.svg';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';

export interface ICheckBox extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}
export default function CustonCheckedBox({ id, checked, ...props }: ICheckBox) {
  const [isChecked, setChecked] = useState(checked);

  return (
    <S.CustonCheckedBox htmlFor={`checkbox-${id}`}>
      <input
        id={`checkbox-${id}`}
        type="checkbox"
        defaultChecked={isChecked}
        role="textbox"
        {...props}
        data-testid="checkbox"
      />
      <span onClick={() => setChecked(!isChecked)} aria-label="checkbox">
        {props.value || <Image src={image} alt="check marcado" />}
      </span>
    </S.CustonCheckedBox>
  );
}
