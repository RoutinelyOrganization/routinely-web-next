import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowDown from '@public/icons/arrowDown.svg';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import Image from 'next/image';
import { useState } from 'react';
// import { CalendarContext } from '../../contexts/CalendarContext';
import * as SComponents from './styledComponents';
import * as SCalendar from './stylesCalendar';

dayjs.locale('pt-br');

interface ICalendar {
  version?: 'expanded' | 'compact';
  setReturnDateValue?: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

const customDayOfWeekFormatter = (date: Dayjs) => {
  const daysMap: { [key: string]: string } = {
    domingo: 'D',
    'segunda-feira': 'S',
    'terça-feira': 'T',
    'quarta-feira': 'Q',
    'quinta-feira': 'Q',
    'sexta-feira': 'S',
    sábado: 'S',
  };

  const dayName = date.format('dddd');
  return daysMap[dayName] || dayName.charAt(0).toUpperCase();
};

export default function DateCalendar({ version = 'expanded', setReturnDateValue }: ICalendar) {
  const [openCalendar, setOpenCalendar] = useState(false);
  // const { setDate } = useContext(CalendarContext);
  const [valueDate, setValueDate] = useState<Dayjs>(dayjs());

  const handleChangeDate = (selectedValue: Dayjs) => {
    // version === 'expanded' && setDate(selectedValue);
    setValueDate(selectedValue);
    setReturnDateValue && setReturnDateValue(selectedValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SComponents.CustonExibitionCalendar version={version}>
        <SComponents.Button onClick={() => setOpenCalendar(!openCalendar)} open={openCalendar}>
          <Image src={ArrowDown} alt="" />
        </SComponents.Button>
        <SCalendar.CustomDemoItem label={dayjs().format('dddd, DD MMMM')}>
          <SComponents.MobileChangeDisplay open={openCalendar}>
            <SCalendar.StyledDateCalendar
              openTo="day"
              onChange={(event: Dayjs) => handleChangeDate(event)}
              value={valueDate}
              views={['day', 'month', 'year']}
              dayOfWeekFormatter={customDayOfWeekFormatter}
              disablePast
            />
          </SComponents.MobileChangeDisplay>
        </SCalendar.CustomDemoItem>
      </SComponents.CustonExibitionCalendar>
    </LocalizationProvider>
  );
}
