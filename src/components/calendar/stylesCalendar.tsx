'use client';

import { colors } from '@/styles/variables';
import { styled } from '@mui/system';
import { DateCalendar } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import 'dayjs/locale/pt-br';
import React from 'react';

interface ICustomDemoItemProps {
  label: string;
  children: React.ReactNode;
}

export const StyledDateCalendar = styled(DateCalendar)({
  width: '100%',
  borderRadius: '0 0 10px 10px',
  backgroundColor: `${colors.white}`,

  '& .Mui-selected': {
    backgroundColor: `${colors.white} !important`,
    border: `2px ${colors.primary} solid !important`,
    color: '#333333 !important',
  },

  '& .MuiPickersDay-today': {
    backgroundColor: `${colors.primary}`,
    color: `${colors.white}`,
    border: 'none',
    '&:hover': {
      backgroundColor: `${colors.secondary}`,
    },
  },

  '& .MuiPickersCalendarHeader-label': {
    color: `${colors.primary}`,
    fontWeight: 'bold',
  },

  '& .MuiPickersCalendarHeader-switchViewIcon': {
    color: `${colors.primary}`,
  },
  '& .css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel': {
    fontWeight: 'bold',
    fontSize: '16px',
    color: `${colors.black}`,
  },

  '& .MuiPickersCalendarHeader-root': {
    padding: '0 0 0 13px',
  },
});

const StyledDemoItemWrapper = styled('div')({
  backgroundColor: `${colors.white}`,
  maxWidth: '450px',
  width: '100%',

  '> p': {
    color: `${colors.primary}`,
    fontWeight: 'bold',
    fontSize: '1.2rem',
    borderBottom: '.1rem',
    border: 'solid',
    borderColor: `transparent transparent ${colors.primary} transparent`,
    padding: '1rem',
  },

  '> p:first-letter': {
    textTransform: 'uppercase',
  },
});

export const CustomDemoItem: React.FC<ICustomDemoItemProps> = ({ label, children }) => (
  <StyledDemoItemWrapper>
    <p>{label}</p>
    <DemoItem>{children}</DemoItem>
  </StyledDemoItemWrapper>
);
