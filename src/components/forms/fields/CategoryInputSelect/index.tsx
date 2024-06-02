'use client';

import React, { useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import Input from '../Input';
import * as S from './styles';

const categories = ['Trabalho123456', 'Estudos', 'Casa', 'Lazer'];
interface ICategoryInputProps {
  register: UseFormRegisterReturn<string>;
  error: boolean;
  messageError?: string;
  initailValue?: string;
}

export default function CategoryInputSelect({
  register,
  error,
  messageError,
  initailValue,
}: ICategoryInputProps) {
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>(categories);
  const [value, setValue] = useState<string>(initailValue || '');
  const [visibility, setVisibility] = useState<boolean>(false);

  const handleSelectCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    !messageError && setVisibility(true);

    const newCategoriesSelected = value
      ? categories.filter(item => item.toLowerCase().includes(value.toLowerCase()))
      : categories;

    setCategoriesSelected(newCategoriesSelected);
  };

  const handleClick = (category: string) => {
    setValue(category);
    setVisibility(false);
  };

  const handleClickInput = (value: string) => {
    !messageError && setVisibility(true);
    handleSelectCategory({ target: { value: value } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <S.Container>
      <Input
        label="Categoria"
        id="category"
        placeholder="Categoria"
        onChange={handleSelectCategory}
        value={value}
        onFocus={() => handleClickInput(value)}
        hasError={error}
        errorMessage={messageError || ''}
        register={register}
      />
      <S.ContainerOptions isVisible={visibility} className="options">
        {categoriesSelected.map(category => (
          <S.Option key={category} onClick={() => handleClick(category)}>
            {category}
          </S.Option>
        ))}
      </S.ContainerOptions>
    </S.Container>
  );
}
