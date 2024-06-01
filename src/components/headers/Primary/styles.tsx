'use client';

import { ButtonBackPage } from '@/components/buttons/ButtonBackPage/styles';
import media from '@/styles/mediaQueries';
import styled from 'styled-components';
import { Header } from '../styles';

export const PrimaryHeader = styled(Header)`
  padding-top: 14px;
  padding-bottom: 14px;

  ${media.mobile} {
    ${ButtonBackPage} {
      > .mobile {
        display: none;
      }
    }
  }
`;
