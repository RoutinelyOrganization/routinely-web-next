'use client';

import DateCalendar from '@/components/calendar';
import ContainerPrevNext from '@/components/containers/ContainerPrevNext';
import { useCalendar } from '@/hooks/useCalendar';
import iconCalendar from '@public/icons/Frame 56.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as S from './styles';
export default function CalendarContainer() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [changeDate, setChangeDate] = useState<'prev' | 'next' | null>(null);
  const { day, nameMonth, weekDay, year, setDate, date } = useCalendar();

  useEffect(() => {
    if (changeDate === 'next') {
      setDate(date.add(1, 'day'));
      setChangeDate(null);
      return;
    }
    if (changeDate === 'prev') {
      setDate(date.subtract(1, 'day'));
      setChangeDate(null);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeDate]);

  const onChangeDate = (value: 'prev' | 'next') => {
    setChangeDate(value);
  };

  return (
    <>
      <S.Container>
        {weekDay && day && nameMonth && year && (
          <h1>
            {weekDay}, {day} de {nameMonth} de {year}
          </h1>
        )}
        <S.ContainerIcons>
          <Image
            src={iconCalendar}
            alt="Calendário"
            onClick={() => setOpenCalendar(!openCalendar)}
          />
          <ContainerPrevNext onChange={onChangeDate} />
          <S.ContainerCalendar $openCalendar={openCalendar}>
            <DateCalendar />
          </S.ContainerCalendar>
        </S.ContainerIcons>
      </S.Container>
      <S.SecondContainerCalendar>
        <DateCalendar />
      </S.SecondContainerCalendar>
    </>
  );
}
