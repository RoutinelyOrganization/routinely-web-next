'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

export const ButtonApp = styled.button`
  gap: 8px;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  font-size: ${fonts.sizes.xxxsmall};
  line-height: 20px;
  font-weight: 500;
  display: none;

  ${media.mobile} {
    display: flex;
		justify-content: center;
    align-items: center;
  }
`;
