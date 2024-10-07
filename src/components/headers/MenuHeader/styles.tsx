'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 200px;
  & img {
    cursor: pointer;
  }
`;

export const ContainerIcons = styled.div`
  display: none;
  gap: 8px;
  ${media.mobile} {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  left: -104px;
  z-index: 999;
  width: 160px;
  background-color: ${colors.white};
  border-radius: 0 0 8px 8px;

  > div {
    background-color: ${colors.primary};
    display: flex;
    justify-content: end;
  }

  ${media.mobile} {
    display: block;
    top: 152%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  list-style: none;
  padding: 8px;
  border-radius: 0 0 8px 8px;
  border: 1px solid ${colors.lightShadow};
  margin: 0;
`;

export const Item = styled.li`
  font-size: ${fonts.sizes.xxsmall};
  line-height: 20px;
  cursor: pointer;
  color: ${colors.primary};

  > a {
    color: ${colors.primary};

    display: block;
    text-decoration: none;
    width: 100%;
  }

  > p {
    margin: 0;
  }
`;

export const ExitButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-weight: bold;

  ${media.mobile} {
    display: none;
  }
`;
