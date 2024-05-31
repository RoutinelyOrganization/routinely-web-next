'use client';

import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const Modal = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 24px;
  max-width: 550px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  box-shadow: 0px 0px 24px ${colors.shadow};
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
  padding: 24px 0;
`;
