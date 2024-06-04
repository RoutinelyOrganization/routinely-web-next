'use client';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { makeCookies } from '@/factories/cookies/makeCookies';
import { makeResetPassword } from '@/factories/services/makeResetPassword';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Input from '../fields/Input';
import * as S from './styles';

export interface IForgotPassword {
  email: string;
}

export default function ForgotPasswordForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>({
    mode: 'onChange',
  });
  const submitForm = async (data: IForgotPassword) => {
    const { body } = await makeResetPassword(data.email);
    const cookie = makeCookies();
    cookie.setCookies(body);
    router.push('/validation-code');
  };
  return (
    <S.Form onSubmit={handleSubmit(submitForm)}>
      <Input
        label="Email"
        id="email"
        hasError={!!errors.email}
        errorMessage={errors.email?.message}
        type="text"
        placeholder="Email"
        register={register('email', {
          required: 'Este campo é obrigatório.',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Este campo precisa ser um email válido.',
          },
        })}
      />
      <S.Span>Você receberá um código de verificação no seu e-mail</S.Span>
      <ButtonPrimary>Enviar</ButtonPrimary>
    </S.Form>
  );
}
