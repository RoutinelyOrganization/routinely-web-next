'use client';

import { ButtonBackPage } from '@/components/buttons/ButtonBackPage/styles';
import media from '@/styles/mediaQueries';
import styled from 'styled-components';
import { Header } from '../styles';

export const PrimaryHeader = styled(Header)`
  padding: 14px 140px;

  ${media.tablet} {
    padding: 14px 32px;
  }

  ${media.mobile} {
    padding: 14px 24px;

    ${ButtonBackPage} {
      > .mobile {
        display: none;
      }
    }
  }
`;
