'use client';

import DateCalendar from '@/components/calendar';
import ContainerPrevNext from '@/components/containers/ContainerPrevNext';
import iconCalendar from '@public/icons/Frame 56.svg';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';
export default function CalendarContainer() {
  const [openCalendar, setOpenCalendar] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [changePage, setChangePage] = useState<'prev' | 'next' | null>(null);
  // const { day, nameMonth, weekDay, year, setDate, date } = useContext(CalendarContext);

  // useEffect(() => {
  //   if (changePage === 'next') {
  //     setDate(date.add(1, 'day'));
  //     setChangePage(null);
  //     return;
  //   }
  //   if (changePage === 'prev') {
  //     setDate(date.subtract(1, 'day'));
  //     setChangePage(null);
  //     return;
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [changePage]);

  return (
    <>
      <S.Container>
        {/* <h1>
          {weekDay}, {day} de {nameMonth} de {year}
        </h1> */}
        <h1>Quinta-feira, 17 de dezembro de 2024</h1>
        <S.ContainerIcons>
          <Image src={iconCalendar} alt="" onClick={() => setOpenCalendar(!openCalendar)} />
          <ContainerPrevNext setChangePage={setChangePage} />
          <S.ContainerCalendar openCalendar={openCalendar}>
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
