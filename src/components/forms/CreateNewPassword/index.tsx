'use client';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import infoError from '@public/icons/infoErro.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../fields/Input';
import * as S from './styles';

export interface INewPassword {
  password: string;
  confirmPassword: string;
}
export default function CreateNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [labelConfirmPassword, setLabelConfirmPassword] = useState('Repetir senha');

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
    console.log(data);

    //   try {
    //     setLoading(true);
    //     await signUp(body);
    //     setShowError(false);
    //     navigate('/signinpage');
    //   } catch (err) {
    //     const { response } = err as AxiosError<{ errors: { message: string }[] }>;
    //     if (response?.data.errors[0].message) {
    //       setShowError(true);
    //       setErroEmail(true);
    //       setLoading(false);
    //     }
    //   } finally {
    //     setLoading(false);
    //   }
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
            required: 'Este campo é obrigatório.',
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
          placeholder="confirmar senha"
          register={register('confirmPassword', {
            required: 'Este campo é obrigatório.',
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

        <ButtonPrimary>Atualizar senha</ButtonPrimary>
      </S.ContainerPasswords>
    </S.Form>
  );
}
