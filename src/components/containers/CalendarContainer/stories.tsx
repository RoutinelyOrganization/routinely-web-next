import { CalendarProvider } from '@/providers/calendarProvider';
import { GlobalStyles } from '@/styles/globalStyles';
import CalendadrContainer from '.';

export default {
  title: 'containers/CalendaderContainer',
  component: CalendadrContainer,
};

export const Template = () => {
  return (
    <div style={{ maxWidth: '1024px' }}>
      <CalendarProvider>
        <GlobalStyles />
        <CalendadrContainer />
      </CalendarProvider>
    </div>
  );
};
