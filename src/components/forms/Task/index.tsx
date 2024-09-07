'use client';

import ButtonDanger from '@/components/buttons/ButtonDanger';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ButtonSecondary from '@/components/buttons/ButtonSecondary';
import DateCalendar from '@/components/calendar';
import PopUp from '@/components/popUp';
import { useTask } from '@/hooks/useTask';
import { Categories } from '@/types/categories';
import type { Task } from '@/types/task';
import type { DaysOfWeek } from '@/types/weekDays';
import { dateFormat, TimeFormat } from '@/utils/formats/dateAndTime';
import { pastDate } from '@/utils/validators/pastDate';
import arrow from '@public/icons/arrowDown.svg';
import closeFormIcon from '@public/icons/closeIcon.svg';
import infoIcon from '@public/icons/informacao.svg';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import CategorySelect from '../fields/CategorySelect';
import ErrorMessage from '../fields/ErrorMessage';
import Input from '../fields/Input';
import WeekDaysCheckBox from '../fields/WeekDaysCheckBox';
import * as S from './styles';

type IFormData = Partial<Task> & { hour: string };

export default function TaskForm() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 500 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {!isMobile ? (
        <PopUp>
          <Form />
        </PopUp>
      ) : (
        <Form />
      )}
    </>
  );
}

function Form() {
  const {
    selectedTask,
    setFormIsOpen,
    selectedTypeTask,
    setActionForm,
    setSelectedTask,
    selectedActionForm,
  } = useTask();
  const [isWeekFrequencyOpen, setIWeekFrequencyOpen] = useState(false);
  const [weekDays, setWeekDays] = useState<DaysOfWeek[]>([]);
  const [finallyDate, setFinallyDate] = useState<Dayjs | null>(null);
  const buttonSubmitRef = useRef<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      ...selectedTask,
      date: dateFormat(selectedTask?.date!),
      hour: TimeFormat(selectedTask?.date!),
      category: Categories[selectedTask?.category as unknown as keyof typeof Categories],
    },
    mode: 'onChange',
  });

  const handleSubmitFormTask: SubmitHandler<IFormData> = async data => {
    const pastDateValidate = pastDate(`${data.date} ${data.hour}`);
    if (!pastDateValidate) {
      setError('date', { message: 'Data menor que a data atual' });
      return;
    }

    data.weekDays = weekDays;
    data.finallyDate = finallyDate ? finallyDate.format('YYYY-MM-DD HH:mm') : undefined;

    const formattedTask = {
      ...data,
      date: `${data.date} ${data.hour}`,
      category: Object.keys(Categories).find(
        key => Categories[key as keyof typeof Categories] === data.category,
      ),
      type: selectedTypeTask?.type,
    } as Task;

    switch (buttonSubmitRef.current) {
      case 'saveTask':
        selectedTask
          ? setActionForm({ action: 'update', openConfirm: true })
          : setActionForm({ action: 'create', openConfirm: true });
        break;
      case 'duplicateTask':
        setActionForm({ action: 'create', openConfirm: true });
        break;
      case 'deleteTask':
        setActionForm({ action: 'delete', openConfirm: true });
        break;
    }
    setSelectedTask(formattedTask);
  };

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitFormTask)} role="form">
      <S.ContainerTitle>
        <S.Title>
          {selectedActionForm.action === 'create' || !selectedActionForm.action
            ? 'Adicionar'
            : 'Editar'}{' '}
          {selectedTypeTask?.name}
          <span>
            <Image src={infoIcon} alt="icone de exclamação" />
            <S.Description>{selectedTypeTask?.description}</S.Description>
          </span>
        </S.Title>
        <S.ImageNext
          src={closeFormIcon}
          alt="fechar formulario"
          onClick={() => {
            setFormIsOpen(false), setSelectedTask(null);
          }}
        />
      </S.ContainerTitle>

      <Input
        label="Titulo"
        placeholder={`Titulo do(a) ${selectedTypeTask?.name}`}
        id="name"
        hasError={!!errors.name}
        register={register('name', {
          required: 'O campo titulo é obrigatório',
          maxLength: {
            value: 50,
            message: 'Quantidade de caracteres máximo, 50!',
          },
        })}
        errorMessage={errors.name && errors.name.message}
      />

      <S.ContainerDateTime>
        <Input
          type="date"
          id="date"
          label="Data"
          hasError={!!errors.date}
          errorMessage={errors.date?.message}
          register={register('date', {
            required: 'O campo data é obrigatório',
          })}
        ></Input>
        <Input
          label="Hora"
          type="time"
          id="hour"
          errorMessage={errors.hour?.message}
          hasError={!!errors.hour}
          register={register('hour', { required: 'O campo Hora é obrigatório' })}
        />
      </S.ContainerDateTime>

      <CategorySelect
        initailValue={selectedTask?.category}
        register={register('category', {
          required: 'O campo categoria é obrigatório',
        })}
        messageError={errors.category?.message}
      />

      <Input
        label="Descrição"
        placeholder="Descrição"
        as="textarea"
        type="text"
        id="description"
        hasError={!!errors.description}
        register={register('description', {
          required: 'O campo descricão é obrigatório',
          maxLength: {
            value: 1000,
            message: 'Quantidade máxima de caracteres, 1000!',
          },
        })}
        errorMessage={errors.description && errors.description.message}
      />

      <S.ContainerOpenWeekFrequency>
        <p>Frequência semanal</p>
        <Image
          src={arrow}
          alt="Abrir campos de frequencia semanal"
          onClick={() => setIWeekFrequencyOpen(!isWeekFrequencyOpen)}
        />
      </S.ContainerOpenWeekFrequency>

      {isWeekFrequencyOpen && (
        <>
          <S.QuantityPerWeekParagraph data-testid="quantityPerWeek" role="paragraph">
            Quantidade{' '}
            <Input
              hasError={!!errors.quantityPerWeek}
              placeholder="0"
              id="quantityPerWeek"
              type="text"
              register={register('quantityPerWeek', {
                validate: value => (value ? Number(value) > 0 : true),
              })}
            />
            Semana
          </S.QuantityPerWeekParagraph>
          {errors.quantityPerWeek && <ErrorMessage>Apenas numeros positivos</ErrorMessage>}

          <div>
            <p>Dias da semana</p>
            <WeekDaysCheckBox weekDays={selectedTask?.weekDays} setWeekDays={setWeekDays} />
          </div>

          <S.ContainerCalendar>
            <p>Finaliza em:</p>
            <DateCalendar
              version="compact"
              setReturnDateValue={setFinallyDate}
              initialDate={dayjs(dateFormat(selectedTask?.finallyDate as string))}
            />
          </S.ContainerCalendar>
        </>
      )}

      <S.ContainerButtons>
        {(selectedActionForm.action !== 'create' ||
          buttonSubmitRef.current === 'duplicateTask') && (
          <>
            <ButtonDanger
              name="deleteTask"
              onClick={() => (buttonSubmitRef.current = 'deleteTask')}
            >
              Excluir
            </ButtonDanger>
            <ButtonSecondary
              name="duplicateTask"
              hover={false}
              onClick={() => (buttonSubmitRef.current = 'duplicateTask')}
            >
              Duplicar
            </ButtonSecondary>
          </>
        )}
        <ButtonPrimary
          className="mobile"
          type="submit"
          onClick={() => (buttonSubmitRef.current = 'saveTask')}
        >
          Salvar Alterações
        </ButtonPrimary>
      </S.ContainerButtons>
    </S.Form>
  );
}
