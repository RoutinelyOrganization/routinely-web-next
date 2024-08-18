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
  const [changePage, setChangePage] = useState<'prev' | 'next' | null>(null);
  const { day, nameMonth, weekDay, year, setDate, date } = useCalendar();

  useEffect(() => {
    if (changePage === 'next') {
      setDate(date.add(1, 'day'));
      setChangePage(null);
      return;
    }
    if (changePage === 'prev') {
      setDate(date.subtract(1, 'day'));
      setChangePage(null);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePage]);

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
          <ContainerPrevNext setChangePage={setChangePage} />
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
