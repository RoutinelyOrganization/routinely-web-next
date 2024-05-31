'use client';

import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

export const ButtonSocial = styled.button`
  display: flex;
  max-width: 368px;
  width: 100%;
  height: 40px;
  padding: 11px 10px;
  justify-content: center;
  align-items: center;
  gap: 21px;
  border-radius: 8px;
  border: 1px solid ${colors.primary};
  background: ${colors.white};
  color: ${colors.darkShadow};
  font-size: ${fonts.sizes.xxxsmall};
  font-weight: 500;
  letter-spacing: 0.219px;
  cursor: pointer;
`;
