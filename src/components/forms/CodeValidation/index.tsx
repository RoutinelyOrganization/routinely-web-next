'use client';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ErrorApiContainer from '@/components/containers/ErrorApiContainer';
import { makeCookies } from '@/factories/cookies/makeCookies';
import { makeValidateCode } from '@/factories/services/makeValidateCode';
import type { ErrorApi } from '@/services/errors/errorApi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../fields/Input';
import * as S from './styles';

export interface ICodeValidation {
  code: string;
}

export default function CodeValidationForm() {
  const router = useRouter();
  const [errorsApi, setErrorsApi] = useState<string[] | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICodeValidation>({
    mode: 'onChange',
  });

  const submitForm = async ({ code }: ICodeValidation) => {
    const cookies = makeCookies();
    const { accountId } = cookies.getCookies(['accountId']);

    try {
      await makeValidateCode({ code, accountId });

      cookies.setCookies({ code });

      router.push('/new-password');
    } catch (error) {
      const errorApi = error as ErrorApi;

      setErrorsApi(errorApi.body || null);
    }
  };
  return (
    <S.Form onSubmit={handleSubmit(submitForm)}>
      <Input
        maxLength={6}
        label="Código de verificação"
        id="code"
        hasError={!!errors.code}
        errorMessage={errors.code?.message}
        type="text"
        placeholder="Código de verificação"
        register={register('code', {
          required: 'Este campo é obrigatório.',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Este campo deve conter apenas números.',
          },
          maxLength: {
            value: 6,
            message: 'Este campo deve ter 6 digitos.',
          },
          minLength: {
            value: 6,
            message: 'Este campo deve ter 6 digitos.',
          },
        })}
      />
      <S.Span>
        Não recebeu? <S.LinkNext href="/forgot-password">Enviar novamente</S.LinkNext>
      </S.Span>
      {errorsApi && <ErrorApiContainer errorMessages={errorsApi} />}
      <ButtonPrimary>Enviar</ButtonPrimary>
    </S.Form>
  );
}
