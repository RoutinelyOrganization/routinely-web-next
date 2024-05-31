import { IWeekDayMock, weekDaysOptions } from '@/mocks/weekDaysOptions';
import { DaysOfWeek } from '@/types/weekDays';
import { useState } from 'react';
import CustonCheckedBox from '../CustonCheckedBox';
import * as S from './styles';

interface IWeekDayProps {
  weekDays?: DaysOfWeek[];
  setWeekDays?: React.Dispatch<React.SetStateAction<DaysOfWeek[]>>;
}

export default function WeekDaysCheckBox({ weekDays, setWeekDays }: IWeekDayProps) {
  const [weekDaysDefault, setWeekDaysDefault] = useState<IWeekDayMock[]>(weekDaysOptions);
  const [weekDaysChecked, setWeekDaysChecked] = useState<DaysOfWeek[]>(weekDays || []);

  const handleWeekDays = (id: number, checked: boolean, name?: string) => {
    weekDaysChecked.includes(name as DaysOfWeek)
      ? weekDaysChecked.splice(weekDaysChecked.indexOf(name as DaysOfWeek), 1)
      : weekDaysChecked.push(name as DaysOfWeek);
    setWeekDaysChecked(weekDaysChecked);
    setWeekDays && setWeekDays(weekDaysChecked);

    const newWeekDaysOptions: IWeekDayMock[] = weekDaysDefault.map(weekDay => {
      if (weekDay.id === id) {
        return { ...weekDay, checked };
      }
      return weekDay;
    });

    setWeekDaysDefault(newWeekDaysOptions);
  };

  return (
    <S.ContainerSelectWeekDays>
      {weekDaysDefault.map(day => (
        <S.ContainerCustonCheckedBox
          key={day.id}
          checked={weekDaysChecked?.includes(day.name) || false}
        >
          <CustonCheckedBox
            id={day.id}
            text={day.shortName}
            setValue={handleWeekDays}
            checked={weekDaysChecked?.includes(day.name) || false}
            name={day.name}
          />
        </S.ContainerCustonCheckedBox>
      ))}
    </S.ContainerSelectWeekDays>
  );
}
