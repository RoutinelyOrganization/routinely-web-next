'use client';

import { Button } from '@/components/buttons/ButtonPrimary/styles';
import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import Image from 'next/image';
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  gap: 32px;
  padding: 64px 0;

  ${media.desktop} {
    padding-top: 40px;
  }

  ${media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
  ${media.mobile} {
    padding-top: 64px;
  }
`;

export const ImageNext = styled(Image)`
  max-width: 60%;

  ${media.tablet} {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-size: ${fonts.sizes.xxxlarge};
  font-weight: bold;
  line-height: 52px;

  ${media.desktop} {
    font-size: ${fonts.sizes.xxlarge};
  }

  ${media.mobile} {
    font-size: ${fonts.sizes.large};
    line-height: 36px;
  }
`;

export const Subtitle = styled.p`
  font-size: ${fonts.sizes.xsmall};
  line-height: 20px;
  color: ${colors.black};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  gap: 32px;

  ${media.tablet} {
    ${Button} {
      width: 50%;
    }
  }
`;

export const ImageContainer = styled.div`
  max-height: 434px;
  align-self: flex-end;
  max-width: 653px;
  width: 50%;

  > img {
    width: 100%;
  }

  ${media.desktop} {
    width: 100%;
    padding-top: 0;
    > img {
      display: block;
      margin: 0 auto;
      max-width: 456px;
    }
  }
`;
