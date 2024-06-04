'use client';

import { colors } from '@/styles/variables';
import styled from 'styled-components';
import { CustonCheckedBox as CheckBox } from '../CustonCheckedBox/styles';

interface ICustonCheckedBox {
  checked: boolean;
}

export const ContainerSelectWeekDays = styled.div`
  margin: 8px 0;
  display: flex;
  gap: 8px;
`;

export const ContainerCustonCheckedBox = styled.div<ICustonCheckedBox>`
  ${CheckBox} {
    > span {
      border: 1px solid ${colors.primary};
      text-align: center;
      cursor: pointer;
      background-color: ${({ checked }) => (checked ? colors.primary : colors.white)};
    }
    > input:checked ~ span {
      color: ${colors.white};
    }
  }
`;
