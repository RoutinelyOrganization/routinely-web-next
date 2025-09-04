'use client';

import { Button as ButtonStyle, LinkNext } from '@/components/buttons/ButtonPrimary/styles';
import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  background-color: ${colors.primary};
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;

    &.container-main {
      justify-content: space-between;
    }
  }

  ${LinkNext} {
    width: 100%;
    max-width: 160px;
  }

  ${media.desktop} {
    ${LinkNext} {
      width: 120px;
    }
  }

  ${media.mobile} {
    padding: 4px 0;

    ${ButtonStyle} {
      background: none;
    }

    .d-none-mobile {
      display: none;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 76px - 2rem);
  margin: 1rem 2rem;
  > hr {
    display: none;
  }

  ${media.mobile} {
    height: calc(100vh - 2.5rem - 2.5rem);
    margin-inline: 1.5rem;
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
    margin-bottom: 1.5rem;
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
    margin-bottom: 4.5rem;
    font-size: ${fonts.sizes.xxsmall};
    line-height: 20px;
  }
`;

// !! O botão foi removido do código, mas o estilo foi mantido, caso precise de ser utilizado novamente
// export const Button = styled.button`
//   max-width: 256px;
//   width: 50%;
//   height: 40px;
//   border-radius: 8px;
//   background-color: ${colors.success};
//   color: ${colors.white};
//   outline: none;
//   border: none;
//   cursor: pointer;
//   margin-bottom: 38px;
//   &:hover {
//     transition: all 0.4s ease;
//     background-color: ${colors.lightSuccess};
//     color: ${colors.black};
//     font-weight: bold;
//   }
// `;

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
      height: auto;
      max-width: 1157px;
      display: block;
    }
    &.tablet-horizontal,
    &.tablet-vertical {
      max-width: 435px;
      width: 50%;
      height: auto;
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
        width: 70%;
        height: auto;
        margin: 0 auto;
      }
    }
  }
`;
