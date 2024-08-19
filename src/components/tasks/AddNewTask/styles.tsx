'use client';

import media from '@/styles/mediaQueries';
import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const ButtonAddTask = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.success};
  cursor: pointer;
  transition: all 0.4s ease;
  > img {
    width: 1.5rem;
  }
  &:hover {
    background-color: ${colors.lightSuccess};
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ContainerTypeTask = styled.div`
  max-width: 180px;
  width: 100%;
  padding: 4px 0;
  border-radius: 8px 0 8px 0;
  box-shadow: 2px 3px 11px -1px;
  background-color: ${colors.white};
  position: absolute;
  right: 23px;
  top: 22px;
  z-index: 20;

  ${media.desktop} {
    border-radius: 0 8px 0 8px;
    top: -84px;
  }
`;

export const Option = styled.p`
  padding: 4px 16px 0;
  cursor: pointer;

  &:hover {
    background-color: ${colors.lightgray};
  }
`;

export const ContainerNewTask = styled.div`
  position: relative;
  max-width: 90px;
  width: 100%;
  height: 80px;
  top: 20px;
  display: flex;
  justify-content: end;

  ${media.desktop} {
    position: fixed;
    z-index: 20;
    top: auto;
    bottom: 0px;
    right: 20px;
  }

  ${media.mobile} {
    top: auto;
    bottom: 57px;
    right: -71px;
    max-width: 100%;
    width: 100%;
    height: 157px;
    ${ContainerTypeTask} {
      top: 0;
      max-width: 400px;
      max-height: 157px;
      > p {
        padding: 16px;
      }
    }
  }
`;
