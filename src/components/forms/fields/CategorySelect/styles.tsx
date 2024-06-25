'use client';

import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';
import { ErrorMessage } from '../ErrorMessage/styles';

interface ISelect {
  $haserror?: boolean;
}

export const Select = styled.select<ISelect>`
  max-width: 500px;
  width: 100%;
  min-height: 74px;
  font-size: ${fonts.sizes.xxsmall};
  color: ${({ $haserror }) => ($haserror ? colors.danger : colors.black)};
  border-radius: 8px;
  border: 1px solid ${({ $haserror }) => ($haserror ? colors.danger : colors.shadow)};
  padding: 0 16px;
  background-color: ${colors.white};
  outline: 0 solid ${colors.shadow};

  ~ ${ErrorMessage} {
    margin-top: -15px;
  }
`;

export const Option = styled.option`
  color: ${colors.black};
  font-size: ${fonts.sizes.xxsmall};
  background-color: ${colors.white};
`;
