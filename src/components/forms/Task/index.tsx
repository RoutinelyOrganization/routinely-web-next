'use client';

import arrow from '@public/icons/arrowDown.svg';
import closeFormIcon from '@public/icons/closeIcon.svg';
import infoIcon from '@public/icons/informacao.svg';
import { SubmitHandler, useForm } from 'react-hook-form';

import ButtonDanger from '@/components/buttons/ButtonDanger';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ButtonSecondary from '@/components/buttons/ButtonSecondary';
import DateCalendar from '@/components/calendar';
import { Task } from '@/types/task';
import { pastDate } from '@/utils/validators/pastDate';
import Image from 'next/image';
import { useState } from 'react';
import CategoryInputSelect from '../fields/CategoryInputSelect';
import ErrorMessage from '../fields/ErrorMessage';
import Input from '../fields/Input';
import WeekDaysCheckBox from '../fields/WeekDaysCheckBox';
import * as S from './styles';

type IFormData = Partial<Task>;

// interface CustomFormEvent extends React.FormEvent {
//   submitter: {
//     name: string;
//   };
// }

export default function TaskForm() {
  const [isWeekFrequencyOpen, setIWeekFrequencyOpen] = useState(false);
  const [tempTask] = useState(false);
  // const [weekDays, setWeekDays] = useState<DaysOfWeek[]>([]);
  // const { formTypeTask, setFormTaskOpen, formTypeAndDescTask, tempTask } = useContext(TasksContext);
  // const [finallyDate, setFinallyDate] = useState<Dayjs | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categorySelected, setCategorySelected] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    // defaultValues: {
    //   ...tempTask,
    //   date: tempTask?.date as unknown as Date,
    // },
  });

  const handleSubmitFormTask: SubmitHandler<IFormData> = async data => {
    console.log(data);

    // const buttonSubmited = (event!.nativeEvent as CustomFormEvent).submitter.name;
    // const finallyDateTemp = dateFormat(dayjs(finallyDate).format('YYYY-MM-DD'));
    // data.finallyDate = (finallyDateTemp as unknown as string).match('/^[^a-zA-Z]*$/')
    //   ? (finallyDateTemp as unknown as Date)
    //   : undefined;
    // data.weekDays = weekDays;
    // data.category = categorySelected;
    // switch (buttonSubmited) {
    //   case "addTask":
    //     setIsConfirmActionOpen(true);
    //     setCrudTasksOptions("addTask");
    //     setDataTask(data);
    //     break;
    //   case "duplicateTask":
    //     setIsConfirmActionOpen(true);
    //     setCrudTasksOptions("duplicateTask");
    //     setDataTask(data);
    //     break;
    //   case "editTask":
    //     setIsConfirmActionOpen(true);
    //     setCrudTasksOptions("editTask");
    //     setDataTask(data);
    //     break;
    //   case "deleteTask":
    //     setIsConfirmActionOpen(true);
    //     setCrudTasksOptions("deleteTask");
    //     setDataTask(data);
    //     break;
    // }
  };

  // const { type, description } = formTypeAndDescTask.find(task => task.type === formTypeTask) || {};

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitFormTask)}>
      <S.ImageNext src={closeFormIcon} alt="fechar formulario" />
      <S.Title>
        adicionar
        <span>
          <Image src={infoIcon} alt="icone de exclamação" />
          <S.Description>description</S.Description>
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
            // setValueAs: value => dayjs(value).format('YYYY-MM-DD'),
            validate: value => pastDate(value!) || 'Data anterior a atual',
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
        setReturnValue={setCategorySelected}
        register={register('category', { required: 'Campo categoria é obrigatório' })}
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
                    console.log(typeof Number(value) === 'number' && Number(value) > 0);
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
            <WeekDaysCheckBox />
          </div>

          <S.ContainerCalendar>
            <p>Finaliza em:</p>
            <DateCalendar version="compact" />
          </S.ContainerCalendar>
        </>
      )}

      <S.ContainerButtons>
        {!tempTask && (
          <>
            <ButtonDanger>Excluir</ButtonDanger>
            <ButtonSecondary hover={false}>Duplicar</ButtonSecondary>
          </>
        )}
        <ButtonPrimary className="mobile">Salvar Alterações</ButtonPrimary>
      </S.ContainerButtons>
    </S.Form>
  );
}
