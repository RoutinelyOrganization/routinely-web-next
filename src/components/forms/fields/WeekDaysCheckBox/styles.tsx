'use client';

import { colors } from '@/styles/variables';
import styled from 'styled-components';
import { CustonCheckedBox as CheckBox } from '../CustonCheckedBox/styles';

export const ContainerSelectWeekDays = styled.div`
  margin: 8px 0;
  display: flex;
  gap: 8px;

  & ${CheckBox} {
    > span {
      border: 1px solid ${colors.primary};
      text-align: center;
      cursor: pointer;
      background-color: ${colors.white};
    }
    > input:checked ~ span {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
`;
