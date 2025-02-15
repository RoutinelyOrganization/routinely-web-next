'use client';

import { ImageNext } from '@/components/containers/PasswordsPagesContainer/styles';
import media from '@/styles/mediaQueries';
import styled from 'styled-components';

export const Container = styled.div`
  .container-main {
    justify-content: space-between;
  }
  ${media.desktop} {
    ${ImageNext} {
      max-width: 50%;
    }
  }

  ${media.tablet} {
    ${ImageNext} {
      position: relative;
      right: -20%;
    }
  }
`;
