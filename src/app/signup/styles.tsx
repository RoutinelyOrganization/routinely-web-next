'use client';

import { ButtonSocial } from '@/components/buttons/ButtonSocialGoogle/styles';
import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import Link from 'next/link';
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 64px 50px;
  gap: 14px;

  > img {
    width: 50%;
    z-index: 1;
  }

  ${media.desktop} {
    padding: 40px 32px;

    > img {
      margin-top: 90px;
    }
  }

  ${media.tablet} {
    padding-top: 64px;
    flex-direction: column;
    align-items: center;

    > img {
      margin-top: -52px;
      width: 294px;
      position: relative;
      right: -20%;
    }
  }

  ${media.mobile} {
    padding-top: 40px;
    > img {
      display: none;
    }
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

export const LinkNext = styled(Link)`
  font-size: ${fonts.sizes.xxsmall};
  line-height: 16px;
  color: ${colors.black};
  text-decoration: none;
  font-weight: bold;
  margin-left: 4.8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  max-width: 368px;
  width: 50%;

  ${ButtonSocial} {
    margin-top: -24px;
  }

  ${media.tablet} {
    width: 456px;
    padding-bottom: 32px;
  }

  ${media.mobile} {
    max-width: 312px;
  }
`;
