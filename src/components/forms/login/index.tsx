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
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [errosApi, setErrosApi] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    mode: 'onChange',
  });

  const handleSubmitSignIn: SubmitHandler<Login> = async (data: Login) => {
    try {
      setLoading(true);
      const response = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (!response?.ok) {
        setErrosApi(response?.error as string);
        return;
      }

      router.replace('/dashboard');
    } finally {
      setLoading(false);
    }
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
            required: 'O campo e-mail é obrigatório',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'preencha um e-mail válido',
            },
          })}
        />

        <Input
          label="Senha"
          type={showPassword ? 'text' : 'password'}
          hasError={!!errors.password}
          id="Password"
          placeholder="senha"
          errorMessage={errors.password?.message}
          register={register('password', {
            required: 'O campo senha é obrigatório',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
              message:
                'A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =',
            },
          })}
        >
          <S.ShowPassword onClick={() => setShowPassword(!showPassword)}>
            <>
              {errors.password && !showPassword ? (
                <Image src={infoError} alt="icone de info erro" />
              ) : showPassword ? (
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
          <S.Checkbox
            type="checkbox"
            id="checkboxSignIn"
            {...register('remember')}
            role="textbox"
          />
        </S.CheckboxWrapper>
        <S.LinkNext href="/forgot-password">Esqueci minha senha</S.LinkNext>
      </S.CheckboxAndForgetPasswordWrapper>

      {errosApi && <ErrorMessage>{errosApi}</ErrorMessage>}

      <S.ButtonWrapper>
        <ButtonPrimary disabled={loading}>
          {!loading ? 'Fazer login' : 'Carregando...'}
        </ButtonPrimary>
      </S.ButtonWrapper>
    </S.Form>
  );
}
