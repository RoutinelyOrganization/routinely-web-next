'use client';

import media from '@/styles/mediaQueries';
import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const ButtonFooter = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${colors.primary};
  border: none;
  padding: 8px;
  display: none;
  cursor: pointer;
  z-index: 20;

  > img {
    width: 59px;
    height: 38px;
    display: block;
    margin: auto;
  }

  ${media.mobile} {
    display: block;
  }
`;
