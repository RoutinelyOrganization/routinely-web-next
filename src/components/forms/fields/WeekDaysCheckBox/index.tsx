import type { IWeekDayMock } from '@/mocks/weekDaysOptions';
import { weekDaysOptions } from '@/mocks/weekDaysOptions';
import type { DaysOfWeek } from '@/types/weekDays';
import React, { useState } from 'react';
import CustonCheckedBox from '../CustonCheckedBox';
import * as S from './styles';

interface IWeekDayProps {
  weekDays?: DaysOfWeek[];
  setWeekDays?: React.Dispatch<React.SetStateAction<DaysOfWeek[]>>;
}

interface IEventClickTarget {
  checked: boolean;
  name: string;
}

export default function WeekDaysCheckBox({ weekDays, setWeekDays }: IWeekDayProps) {
  const [weekDaysDefault, setWeekDaysDefault] = useState<IWeekDayMock[]>(weekDaysOptions);
  const [weekDaysChecked, setWeekDaysChecked] = useState<DaysOfWeek[]>(weekDays || []);

  const handleWeekDays = (event: React.MouseEvent<HTMLInputElement>) => {
    const { checked, name } = event.target as unknown as IEventClickTarget;

    weekDaysChecked.includes(name as DaysOfWeek)
      ? weekDaysChecked.splice(weekDaysChecked.indexOf(name as DaysOfWeek), 1)
      : weekDaysChecked.push(name as DaysOfWeek);

    const newWeekDaysOptions: IWeekDayMock[] = weekDaysDefault.map(weekDay => {
      if (weekDay.name === name) {
        return { ...weekDay, checked };
      }
      return weekDay;
    });

    setWeekDaysDefault(newWeekDaysOptions);
    setWeekDaysChecked(weekDaysChecked);
    setWeekDays && setWeekDays(weekDaysChecked);
  };

  return (
    <S.ContainerSelectWeekDays>
      {weekDaysDefault.map(day => (
        <S.ContainerCustonCheckedBox key={day.id} checked={weekDaysChecked?.includes(day.name)}>
          <CustonCheckedBox
            id={day.name}
            value={day.shortName}
            onClick={e => handleWeekDays(e)}
            checked={weekDaysChecked?.includes(day.name)}
            name={day.name}
          />
        </S.ContainerCustonCheckedBox>
      ))}
    </S.ContainerSelectWeekDays>
  );
}
