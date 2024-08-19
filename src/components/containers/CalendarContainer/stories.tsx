import { CalendarProvider } from '@/providers/calendarProvider';
import CalendadrContainer from '.';

export default {
  title: 'containers/CalendaderContainer',
  component: CalendadrContainer,
};

export const Template = () => {
  return (
    <div style={{ maxWidth: '1024px' }}>
      <CalendarProvider>
        <CalendadrContainer />
      </CalendarProvider>
    </div>
  );
};
