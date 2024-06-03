'use client';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { useForm } from 'react-hook-form';
import Input from '../fields/Input';
import * as S from './styles';

export interface IRedefinePassword {
  code: string;
}

export default function RedefinePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRedefinePassword>({
    mode: 'onChange',
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const submitForm = async (data: IRedefinePassword) => {
    // const { data } = await instance.post('/auth/resetpassword', dataForm);
    // window.localStorage.setItem('accountId', data.accountId);
    // console.log(data);
    // navigate('/redefinePasswordPage');
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
        placeholder=""
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
        Não recebeu? <S.LinkNext href="#">Enviar novamente</S.LinkNext>
      </S.Span>
      <ButtonPrimary>Enviar</ButtonPrimary>
    </S.Form>
  );
}
