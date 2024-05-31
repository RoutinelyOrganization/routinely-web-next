'use client';

import media from '@/styles/mediaQueries';
import { colors } from '@/styles/variables';
import styled from 'styled-components';

interface IChangeDisplayCalendar {
  open: boolean;
}

interface IExibitionCalendar {
  version?: 'expanded' | 'compact';
}

export const MobileChangeDisplay = styled.div<IChangeDisplayCalendar>`
  opacity: 1;
  display: block;
  ${media.mobile} {
    opacity: ${props => (props.open ? '1' : '0')};
    height: ${props => (props.open ? 'auto' : '0')};
    overflow: hidden;
    transition: opacity 0.3s ease;
  }
`;

export const Button = styled.button<IChangeDisplayCalendar>`
  display: none;
  cursor: pointer;

  ${media.mobile} {
    display: block;
    position: absolute;
    top: ${props => (props.open ? '0' : '9%')};
    right: 0;
    border: none;
    background-color: transparent;
    transform: ${props => (props.open ? 'rotate(180deg)' : '')};

    > img {
      width: 50px;
      height: 50px;
      fill: ${colors.primary};
    }
  }
`;

export const CustonExibitionCalendar = styled.div<IExibitionCalendar>`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 2px solid ${colors.primary};
  border-radius: 8px;

  > div {
    border-radius: 8px;
  }

  ${props =>
    props.version === 'compact' &&
    `
    .css-dplwbx-MuiPickersCalendarHeader-label {
      font-weight: 400 !important;
      text-transform: capitalize;
    }
    .MuiDateCalendar-root {
      border-radius: 8px;
    }

    > div {
      > p{
        display: none;
      }
    }

    ${MobileChangeDisplay}{
      opacity: 1;
      height: auto;
    }

    ${Button} {
      display: none;
    }
  `}

  ${media.mobile} {
    position: relative;
  }
`;
