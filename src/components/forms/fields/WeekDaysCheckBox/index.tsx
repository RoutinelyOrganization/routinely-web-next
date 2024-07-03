import CustonCheckedBox from '@/components/forms/fields/CustonCheckedBox';
import { weekDaysOptions } from '@/constants/weekDaysOptions';
import type { DaysOfWeek } from '@/types/weekDays';
import React, { useState } from 'react';
import * as S from './styles';

export interface IWeekDayProps {
  weekDays?: DaysOfWeek[];
  setWeekDays?: React.Dispatch<React.SetStateAction<DaysOfWeek[]>>;
}

export default function WeekDaysCheckBox({ weekDays, setWeekDays }: IWeekDayProps) {
  const [weekDaysChecked, setWeekDaysChecked] = useState<DaysOfWeek[]>(weekDays || []);

  const handleWeekDays = (name: DaysOfWeek) => {
    weekDaysChecked.includes(name)
      ? weekDaysChecked.splice(weekDaysChecked.indexOf(name), 1)
      : weekDaysChecked.push(name);

    setWeekDaysChecked(weekDaysChecked);
    setWeekDays && setWeekDays(weekDaysChecked);
  };

  return (
    <S.ContainerSelectWeekDays data-testid="weekDaysCheckBox">
      {weekDaysOptions.map(day => (
        <CustonCheckedBox
          key={day.id}
          id={day.name}
          value={day.shortName}
          onClick={() => handleWeekDays(day.name)}
          defaultChecked={weekDaysChecked.includes(day.name)}
          name={day.name}
        />
      ))}
    </S.ContainerSelectWeekDays>
  );
}
