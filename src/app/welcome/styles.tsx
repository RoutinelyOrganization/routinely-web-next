'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import { styled } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 96px 32px 0;
  height: 100vh;
  gap: 24px;

  > img {
    width: 40%;
    position: relative;
    top: -20%;
  }

  ${media.desktop} {
    > div {
      width: 100%;
    }
    > img {
      width: 50%;
      top: -130px;
    }
  }

  ${media.tablet} {
    padding-top: 64px;
    margin: auto;
    flex-direction: column;

    > div {
      width: 100%;
    }

    > img {
      top: 0;
      max-height: 427px;
      margin: 55px auto 0;
    }
  }

  ${media.mobile} {
    > img {
      margin-top: 0;
    }
  }
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-size: ${fonts.sizes.xxlarge};
  font-weight: 700;
  line-height: 52px;
  margin-top: 40px;
  margin-bottom: 24px;

  ${media.mobile} {
    font-size: ${fonts.sizes.large};
    line-height: 36px;
    margin-top: 24px;
  }
`;

export const Caption = styled.p`
  font-size: ${fonts.sizes.medium};
  font-weight: 700;
  line-height: 28px;
  color: ${colors.black};
  margin-bottom: 80px;

  ${media.desktop} {
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 24px;
    font-size: ${fonts.sizes.small};
  }

  ${media.mobile} {
    font-size: ${fonts.sizes.xxsmall};
    font-weight: bold;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0px;

  ${media.desktop} {
    flex-direction: row;
    gap: 24px;
  }
`;
