'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

export const Conteiner = styled.section``;

export const Select = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${colors.lightShadow};
  font-size: ${fonts.sizes.xxsmall};
  margin-bottom: 32px;
  color: ${colors.primary};
  max-width: 250px;
  width: 100%;
  outline-color: ${colors.primary};

  ${media.tablet} {
    max-width: 200px;
  }

  ${media.mobile} {
    max-width: 100%;
  }
`;
