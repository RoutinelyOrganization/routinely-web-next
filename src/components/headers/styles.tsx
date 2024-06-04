'use client';

import media from '@/styles/mediaQueries';
import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const Header = styled.header`
  gap: 80px;
  background-color: ${colors.primary};
  position: relative;
  z-index: 1;

  .container-main {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  ${media.tablet} {
    gap: 50px;
  }

  ${media.mobile} {
    gap: 0;
  }
`;
