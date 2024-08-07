import type { Dayjs } from 'dayjs';
import DateCalendar from '.';

export default {
  title: 'DateCalendar',
  argTypes: {
    version: {
      control: {
        type: 'select',
        options: ['expanded', 'compact'],
      },
    },
    initialDate: {
      control: {
        type: 'date',
      },
    },
    setReturnDateValue: { action: 'setReturnDateValue' },
  },
};

export const Template = (args: {
  version?: 'expanded' | 'compact';
  initialDate?: Dayjs;
  setReturnDateValue?: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}) => {
  return <DateCalendar {...args} />;
};
