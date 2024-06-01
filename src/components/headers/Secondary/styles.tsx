'use client';

import { ButtonBackPage } from '@/components/buttons/ButtonBackPage/styles';
import media from '@/styles/mediaQueries';
import styled from 'styled-components';
import { Header } from '../styles';

export const SecondaryHeader = styled(Header)`
  padding-top: 32px;
  padding-bottom: 32px;

  ${media.desktop} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${media.tablet} {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  ${media.mobile} {
    ${ButtonBackPage} {
      > .mobile {
        display: block;
      }
    }
  }
`;
