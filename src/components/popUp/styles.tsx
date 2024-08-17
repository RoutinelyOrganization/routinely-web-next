'use client';

import media from '@/styles/mediaQueries';
import { colors } from '@/styles/variables';
import styled from 'styled-components';
import { ButtonFooter } from '../buttons/ButtonFooter/styles';

export const Modal = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 24px;
  max-width: 324px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  box-shadow: 0px 0px 24px ${colors.shadow};
  font-family: 'Roboto', sans-serif;
  color: ${colors.black};
  font-size: 20px;

  ${media.mobile} {
    max-width: 288px;
    font-size: 16px;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.shadow};
  width: 100vw;
  min-height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    flex-direction: column;
    padding: 0;

    ${ButtonFooter} {
      width: 100vw;
    }
  }
`;
