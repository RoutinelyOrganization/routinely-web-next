'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;
  padding: 100px 120px;

  ${media.tablet} {
    padding-top: 64px;
    flex-direction: column;
    align-items: center;

    > img {
      max-width: 468px;
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: ${fonts.sizes.xxxlarge};
  font-weight: 700;
  line-height: 52px;
  text-align: left;
  color: ${colors.black};
  margin: 32px 0;
`;

export const LinkNext = styled(Link)`
  font-size: ${fonts.sizes.xxsmall};
  line-height: 16px;
  color: ${colors.black};
  text-decoration: none;
  font-weight: 700;
  margin-left: 4.8px;
`;
