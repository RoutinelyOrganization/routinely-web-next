'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  justify-items: center;
  gap: 32px;
  padding-top: 100px;
  padding-bottom: 100px;

  &.container-main {
    justify-content: space-evenly;
  }
  > div {
    width: 100%;
  }

  > img {
    width: 90%;
  }

  ${media.desktop} {
    padding-top: 64px;
    padding-bottom: 64px;
    gap: 16px;
    > img {
      position: relative;
      bottom: -15%;
    }
  }

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      max-width: 450px;
    }

    > img {
      max-width: 468px;
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-size: ${fonts.sizes.xxxlarge};
  font-weight: 700;
  line-height: 52px;
  text-align: left;
  color: ${colors.black};
  margin: 32px 0;

  ${media.desktop} {
    font-size: ${fonts.sizes.xxlarge};
  }
`;

export const LinkNext = styled(Link)`
  font-size: ${fonts.sizes.xxsmall};
  line-height: 16px;
  color: ${colors.black};
  text-decoration: none;
  font-weight: 700;
  margin-left: 4.8px;
`;
