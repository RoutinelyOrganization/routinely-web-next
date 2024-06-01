import { CalendarContext } from '@/contexts/CalendarContext';
import { useContext } from 'react';

export const useCalendar = () => {
  return useContext(CalendarContext);
};
