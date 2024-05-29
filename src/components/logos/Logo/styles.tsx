'use client';

import media from '@/styles/mediaQueries';
import Link from 'next/link';
import styled from 'styled-components';

export const LinkNext = styled(Link)`
  width: 156px;
  height: 55px;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${media.mobile} {
    width: 72px;
    height: 26px;
    > svg {
      width: 100%;
    }
  }
`;
