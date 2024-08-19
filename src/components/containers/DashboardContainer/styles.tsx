'use client';

import media from '@/styles/mediaQueries';
import { colors } from '@/styles/variables';
import { styled } from 'styled-components';

interface IDashboardContainerStyles {
  $isVisible: boolean;
}

export const ContainerPrincipal = styled.div<IDashboardContainerStyles>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 14px;

  padding-top: 64px;
  padding-bottom: 64px;

  ${media.mobile} {
    padding: 10px 10px 74px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const ContainerTasks = styled.section`
  max-width: 576px;
  width: 50%;
  border-radius: 10px;
  border: 1px ${colors.primary} solid;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  position: relative;

  ${media.desktop} {
    width: 60%;
  }

  ${media.tablet} {
    width: 100%;
    margin-top: 32px;
  }

  ${media.mobile} {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ContainerCalendar = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 40px;
`;
