'use client';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { useForm } from 'react-hook-form';
import Input from '../fields/Input';
import * as S from './styles';

export interface IForgotPassword {
  email: string;
}

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>({
    mode: 'onChange',
  });
  const submitForm = async (data: IForgotPassword) => {
    console.log(data);

    // const { data } = await instance.post('/auth/resetpassword', dataForm);
    // window.localStorage.setItem('accountId', data.accountId);
    // console.log(data);
    // navigate('/redefinePasswordPage');
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
