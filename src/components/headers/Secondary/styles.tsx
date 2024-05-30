'use client';

import { ButtonBackPage } from '@/components/buttons/ButtonBackPage/styles';
import media from '@/styles/mediaQueries';
import styled from 'styled-components';
import { Header } from '../styles';

export const SecondaryHeader = styled(Header)`
  padding: 32px 120px;

  ${media.desktop} {
    padding: 24px 32px;
  }

  ${media.tablet} {
    padding: 14px 24px;
  }

  ${media.mobile} {
    ${ButtonBackPage} {
      > .mobile {
        display: block;
      }
    }
  }
`;
