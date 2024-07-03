import { categories } from '@/constants/categories';
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import * as S from './styles';

interface ICategorySelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  register: UseFormRegisterReturn<string>;
  messageError?: string;
  initailValue?: string;
}
export default function CategorySelect({
  register,
  initailValue,
  messageError,
  ...props
}: ICategorySelectProps) {
  return (
    <>
      <S.Select
        defaultValue={initailValue || ''}
        $haserror={!!messageError}
        {...props}
        {...register}
      >
        <S.Option disabled value="">
          Categoria
        </S.Option>
        {categories.map(category => (
          <S.Option key={category} value={category}>
            {category}
          </S.Option>
        ))}
      </S.Select>
      {messageError && <ErrorMessage>{messageError}</ErrorMessage>}
    </>
  );
}
