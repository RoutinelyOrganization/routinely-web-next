import type { IWeekDayProps } from '.';
import WeekDaysCheckboxs from '.';

export default {
  title: 'forms/fields/WeekDaysCheckboxs',
  component: WeekDaysCheckboxs,
};

export const Template = (args: IWeekDayProps) => {
  return (
    <div>
      <WeekDaysCheckboxs {...args} />
    </div>
  );
};
