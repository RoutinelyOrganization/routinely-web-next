'use client';

import { Button as ButtonStyle } from '@/components/buttons/ButtonPrimary/styles';
import { ContainerIcons, Container as MenuHeader } from '@/components/headers/MenuHeader/styles';
import { LinkNext as Logo } from '@/components/logos/Logo/styles';
import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 14px 24px;
  background-color: ${colors.primary};
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${Logo} {
    margin-right: 100px;
  }

  & ${ButtonStyle} {
    max-width: 160px;
  }

  ${media.tablet} {
    ${Logo} {
      margin-right: 45px;
    }
  }

  ${media.mobile} {
    padding: 4px 0;

    & ${ButtonStyle} {
      margin-right: 8px;
    }

    .d-none-mobile {
      display: none;
    }
  }
`;

export const ContainerButtonsHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
  justify-content: space-between;

  ${MenuHeader} {
    display: none;
  }

  ${media.desktop} {
    max-width: 408px;
    width: 70%;
    gap: 24px;
  }

  ${media.tablet} {
    gap: 0px;
  }

  ${media.mobile} {
    max-width: 150px;
    gap: 16px;
    & .resources,
    & .plans {
      display: none;
    }

    > ${MenuHeader} {
      display: block;
      ${ContainerIcons} {
        :first-child {
          display: none;
        }
      }
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 152px 0 80px 0;

  > hr {
    display: none;
  }

  ${media.desktop} {
    padding-top: 56px;
  }

  ${media.mobile} {
    padding-top: 40px;
    > hr {
      display: block;
      width: 100%;
      margin-bottom: 32px;
    }
  }
`;
export const Title = styled.h1`
  font-size: ${fonts.sizes.xxxlarge};
  font-weight: 700;
  line-height: 52px;
  text-align: center;
  max-width: 992px;
  width: 100%;
  margin-bottom: 40px;

  ${media.desktop} {
    text-align: left;
    margin-bottom: 56px;
  }

  ${media.tablet} {
    margin-bottom: 40px;
    font-size: ${fonts.sizes.xxlarge};
    line-height: 44px;
  }

  ${media.mobile} {
    font-size: ${fonts.sizes.medium};
    line-height: 28px;
  }
`;

export const Caption = styled.p`
  font-size: ${fonts.sizes.medium};
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  max-width: 860px;
  width: 100%;
  margin-bottom: 48px;

  ${media.mobile} {
    font-size: ${fonts.sizes.xxsmall};
    line-height: 20px;
  }
`;
export const Button = styled.button`
  max-width: 256px;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  background-color: ${colors.success};
  color: ${colors.white};
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 38px;
  &:hover {
    transition: all 0.4s ease;
    background-color: ${colors.lightSuccess};
    color: ${colors.black};
    font-weight: bold;
  }
`;

export const ContainerCaptionImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    text-align: center;
  }

  > img {
    &.desktop {
      width: 100%;
      max-width: 1198px;
      display: block;
    }
    &.tablet-horizontal,
    &.tablet-vertical {
      max-width: 435px;
      width: 50%;
      display: none;
    }
  }

  ${media.desktop} {
    flex-direction: row;
    align-items: normal;

    > div {
      text-align: left;
      max-width: 516px;
      width: 100%;
      z-index: 1;
      ${Caption} {
        text-align: left;
      }
    }

    > img {
      &.desktop {
        display: none;
      }
      &.tablet-horizontal {
        display: block;
      }
    }
  }

  ${media.tablet} {
    flex-direction: row;
    align-items: normal;
    > img {
      &.tablet-vertical {
        display: block;
      }
      &.tablet-horizontal {
        display: none;
      }
    }
  }

  ${media.mobile} {
    display: block;
    margin-bottom: 32px;

    > div {
      text-align: center;
    }

    > img {
      &.tablet-vertical {
        display: none;
      }
      &.tablet-horizontal {
        display: block;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;
