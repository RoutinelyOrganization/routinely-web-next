'use client';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ErrorApiContainer from '@/components/containers/ErrorApiContainer';
import Input from '@/components/forms/fields/Input';
import { makeCookies } from '@/factories/cookies/makeCookies';
import { makeChangePassword } from '@/factories/services/makeChangePassword';
import type { ErrorApi } from '@/services/errors/errorApi';
import infoError from '@public/icons/infoErro.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styles';

export interface INewPassword {
  password: string;
  confirmPassword: string;
}
export default function CreateNewPassword() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [labelConfirmPassword, setLabelConfirmPassword] = useState('Repetir senha');
  const [errorsApi, setErrorsApi] = useState<string[] | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<INewPassword>({
    mode: 'onChange',
  });

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const handlePasswords = async (data: INewPassword) => {
    try {
      const cookies = makeCookies();
      const { accountId, code } = cookies.getCookies(['accountId', 'code']);

      const body = {
        password: data.password,
        code,
        accountId,
      };

      await makeChangePassword(body);
      cookies.deleteCookies(['accountId', 'code']);
      router.replace('/login');
    } catch (error) {
      const errorApi = error as ErrorApi;
      setErrorsApi(errorApi.body!);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 904
        ? setLabelConfirmPassword('Repetir')
        : setLabelConfirmPassword('Repetir senha');
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Form onSubmit={handleSubmit(handlePasswords)}>
      <S.ContainerPasswords>
        <Input
          label="Senha"
          hasError={!!errors.password}
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="senha"
          register={register('password', {
            required: 'O campo senha é obrigatório.',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
              message:
                'A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =',
            },
            onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
              target.value !== confirmPassword
                ? setError('confirmPassword', {
                    type: 'validate',
                    message: 'As senhas devem ser iguais',
                  })
                : setError('confirmPassword', {
                    type: 'validate',
                    message: '',
                  });
            },
          })}
          errorMessage={errors.password?.message}
          autoComplete="password"
        >
          <S.ShowPasswordSpand onClick={() => setShowPassword(!showPassword)}>
            <>
              {errors.password && !showPassword ? (
                <Image src={infoError} alt="icone de info erro" />
              ) : showPassword ? (
                'ESCONDER'
              ) : (
                'EXIBIR'
              )}
            </>
          </S.ShowPasswordSpand>
        </Input>

        <Input
          label={labelConfirmPassword}
          hasError={!!errors.confirmPassword?.message}
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirmPassword"
          placeholder="repetir senha"
          register={register('confirmPassword', {
            required: 'O campo repetir senha é obrigatório.',
            validate: value => value === password || 'As senhas devem ser iguais',
          })}
          errorMessage={errors.confirmPassword?.message}
          autoComplete="confirmPassword"
        >
          <S.ShowPasswordSpand onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            <>
              {errors.confirmPassword?.message && !showConfirmPassword ? (
                <Image src={infoError} alt="icone de info erro" />
              ) : showConfirmPassword ? (
                'ESCONDER'
              ) : (
                'EXIBIR'
              )}
            </>
          </S.ShowPasswordSpand>
        </Input>

        {errorsApi && <ErrorApiContainer errorMessages={errorsApi} />}
        <ButtonPrimary>Atualizar senha</ButtonPrimary>
      </S.ContainerPasswords>
    </S.Form>
  );
}
