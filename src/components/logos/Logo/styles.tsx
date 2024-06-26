'use client';

import media from '@/styles/mediaQueries';
import Link from 'next/link';
import styled from 'styled-components';

export const LinkNext = styled(Link)`
  width: 120px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${media.mobile} {
    width: 100px;
    height: 35px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
