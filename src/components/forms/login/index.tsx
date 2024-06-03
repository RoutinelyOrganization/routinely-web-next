'use client';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import type { Login } from '@/types/login';
import infoError from '@public/icons/infoErro.svg';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../fields/ErrorMessage';
import Input from '../fields/Input';
import * as S from './styles';

export default function LoginForm() {
  const [showPassord, setShowPassword] = useState<boolean>(false);
  const [loading] = useState<boolean>(false);
  const router = useRouter();
  const [showError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    mode: 'onChange',
  });

  const handleSubmitSignIn: SubmitHandler<Login> = async (data: Login) => {
    await signIn('credentials', {
      ...data,
      redirect: false,
    });
    router.replace('/dashboard');
  };

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitSignIn)}>
      <S.InputWrapper>
        <Input
          label="E-mail"
          hasError={!!errors.email}
          type="text"
          id="E-mail"
          placeholder="e-mail"
          errorMessage={errors.email?.message}
          register={register('email', {
            required: 'Campo de preenchimento obrigatório',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'preencha um e-mail válido',
            },
          })}
        />

        <Input
          label="Senha"
          type={showPassord ? 'text' : 'password'}
          hasError={!!errors.password}
          id="Password"
          placeholder="senha"
          errorMessage={errors.password?.message}
          register={register('password', {
            required: 'campo de preenchimento obrigatório',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
              message:
                'A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =',
            },
          })}
        >
          <S.ShowPassword onClick={() => setShowPassword(!showPassord)}>
            <>
              {errors.password && !showPassord ? (
                <Image src={infoError} alt="icone de info erro" />
              ) : errors.password && showPassord ? (
                'ESCONDER'
              ) : (
                'EXIBIR'
              )}
            </>
          </S.ShowPassword>
        </Input>
      </S.InputWrapper>
      <S.CheckboxAndForgetPasswordWrapper>
        <S.CheckboxWrapper>
          <label htmlFor="checkboxSignIn">Lembrar meu acesso</label>
          <S.Checkbox type="checkbox" id="checkboxSignIn" {...register('remember')} />
        </S.CheckboxWrapper>
        <S.LinkNext href="/forgot-password">Esqueci minha senha</S.LinkNext>
      </S.CheckboxAndForgetPasswordWrapper>

      {showError && <ErrorMessage>email ou senha inválidos</ErrorMessage>}

      <S.ButtonWrapper>
        {loading ? (
          <ButtonPrimary disabled>Carregando...</ButtonPrimary>
        ) : (
          <ButtonPrimary>Fazer login</ButtonPrimary>
        )}
      </S.ButtonWrapper>
    </S.Form>
  );
}
