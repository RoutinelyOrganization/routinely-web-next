'use client';

import ButtonDanger from '@/components/buttons/ButtonDanger';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ButtonSecondary from '@/components/buttons/ButtonSecondary';
import DateCalendar from '@/components/calendar';
import { useTask } from '@/hooks/useTask';
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
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import CategoryInputSelect from '../fields/CategoryInputSelect';
import ErrorMessage from '../fields/ErrorMessage';
import Input from '../fields/Input';
import WeekDaysCheckBox from '../fields/WeekDaysCheckBox';
import * as S from './styles';

type IFormData = Partial<Task>;

interface CustomFormEvent extends React.FormEvent {
  submitter: {
    name: string;
  };
}

export default function TaskForm() {
  const { selectedTask, setFormIsOpen, selectedTypeTask, setActionForm } = useTask();
  const [isWeekFrequencyOpen, setIWeekFrequencyOpen] = useState(false);
  const [weekDays, setWeekDays] = useState<DaysOfWeek[]>([]);
  const [finallyDate, setFinallyDate] = useState<Dayjs | null>(null);
  // const { formTypeTask, setFormTaskOpen, formTypeAndDescTask, tempTask } = useContext(TasksContext);
  // const [finallyDate, setFinallyDate] = useState<Dayjs | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      ...selectedTask,
      date: dateFormat(selectedTask?.date as Date) as unknown as Date,
      hour: TimeFormat(selectedTask?.date as Date),
    },
  });

  const handleSubmitFormTask: SubmitHandler<IFormData> = async (data, event) => {
    const pastDateValidate = pastDate(`${data.date} ${data.hour}`);
    if (!pastDateValidate) {
      setError('date', { message: 'Data menor que a data atual' });
      return;
    }

    data.weekDays = weekDays;
    data.finallyDate = finallyDate ? new Date(finallyDate.format('YYYY-MM-DD')) : undefined;

    const buttonSubmited = (event!.nativeEvent as CustomFormEvent).submitter.name;

    switch (buttonSubmited) {
      case 'saveTask':
        selectedTask ? setActionForm('update') : setActionForm('create');
        break;
      case 'duplicateTask':
        setActionForm('create');
        break;
      case 'deleteTask':
        setActionForm('delete');
        break;
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitFormTask)}>
      <S.ImageNext
        src={closeFormIcon}
        alt="fechar formulario"
        onClick={() => setFormIsOpen(false)}
      />
      <S.Title>
        {selectedTask ? 'Editar' : 'Adicionar'} {selectedTypeTask?.name}
        <span>
          <Image src={infoIcon} alt="icone de exclamação" />
          <S.Description>{selectedTypeTask?.description}</S.Description>
        </span>
      </S.Title>

      <Input
        label="Titulo"
        placeholder="Nome do Hábito"
        id="name"
        hasError={!!errors.name}
        register={register('name', {
          required: 'campo obrigatório',
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
            required: 'campo data é obrigatório',
          })}
        ></Input>
        <Input
          label="Hora"
          type="time"
          id="hour"
          errorMessage={errors.hour?.message}
          hasError={!!errors.hour}
          register={register('hour', { required: 'Campo Hora é obrigatório' })}
        />
      </S.ContainerDateTime>

      <CategoryInputSelect
        initailValue={selectedTask?.category}
        register={register('category', {
          required: 'Campo categoria é obrigatório',
          maxLength: {
            value: 10,
            message: 'Quantidade de caracteres máximo, 10!',
          },
        })}
        error={!!errors.category}
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
          required: 'campo obrigatório',
          maxLength: {
            value: 1000,
            message: 'Quantidade máxima de caracteres, 1000!',
          },
        })}
        errorMessage={errors.description && errors.description.message}
      />

      <S.ContainerOpenWeekFrequency>
        <p>Frequencia semanal</p>
        <Image
          src={arrow}
          alt="Seta para baixo"
          onClick={() => setIWeekFrequencyOpen(!isWeekFrequencyOpen)}
        />
      </S.ContainerOpenWeekFrequency>

      {isWeekFrequencyOpen && (
        <>
          <S.QuantityPerWeekParagraph>
            Quantidade{' '}
            <Input
              hasError={!!errors.quantityPerWeek}
              placeholder="0"
              id="quantityPerWeek"
              type="text"
              register={register('quantityPerWeek', {
                validate: value => {
                  if (value) {
                    return typeof Number(value) === 'number' && Number(value) > 0;
                  }
                  return true;
                },
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
              initialDate={dayjs(dateFormat(selectedTask?.finallyDate as Date))}
            />
          </S.ContainerCalendar>
        </>
      )}

      <S.ContainerButtons>
        {selectedTask && (
          <>
            <ButtonDanger name="deleteTask">Excluir</ButtonDanger>
            <ButtonSecondary name="duplicateTask" hover={false}>
              Duplicar
            </ButtonSecondary>
          </>
        )}
        <ButtonPrimary name="saveTask" className="mobile">
          Salvar Alterações
        </ButtonPrimary>
      </S.ContainerButtons>
    </S.Form>
  );
}
