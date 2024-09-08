'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

interface IChangeDisplayCalendar {
  $openCalendar: boolean;
}

export const Container = styled.section`
  position: relative;
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: ${fonts.sizes.xxlarge};
  }
  @media screen and (max-width: 890px) {
    > h1 {
      font-size: ${fonts.sizes.large};
      margin-bottom: 16px;
    }
  }

  ${media.tablet} {
    > h1 {
      font-size: ${fonts.sizes.medium};
      margin-bottom: 0;
    }
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ContainerIcons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 20%;
  width: 100%;
  justify-content: space-around;
  gap: 8px;

  > img {
    display: inline-block;
    background-color: ${colors.lightgray};
    border-radius: 8px;
    width: 50px;
    &:hover {
      cursor: pointer;
    }
  }

  ${media.desktop} {
    position: absolute;
    flex-direction: column;
    right: 0;
    top: 0;

    > img {
      margin-bottom: 27px;
    }
  }

  ${media.tablet} {
    > img {
      width: 40px;
      height: 32px;
    }
  }
`;

export const ContainerCalendar = styled.div<IChangeDisplayCalendar>`
  position: absolute;
  top: 100%;
  left: -30%;
  z-index: 10;
  display: ${({ $openCalendar }) => ($openCalendar ? 'block' : 'none')};

  ${media.desktop} {
    left: -145px;
    top: 40%;
  }

  ${media.tablet} {
    left: -180px;
  }
`;

export const SecondContainerCalendar = styled.div`
  display: none;
  width: 100%;

  ${media.mobile} {
    display: block;
  }
`;
