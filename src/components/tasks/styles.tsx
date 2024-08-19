'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

export const Conteiner = styled.section``;

export const Select = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${colors.lightShadow};
  font-size: ${fonts.sizes.xxsmall};
  margin-bottom: 32px;
  color: ${colors.primary};
  max-width: 250px;
  width: 100%;
  outline-color: ${colors.primary};
  cursor: pointer;

  ${media.tablet} {
    max-width: 200px;
  }

  ${media.mobile} {
    max-width: 100%;
  }
`;

export const NoTask = styled.p`
  font-size: ${fonts.sizes.xxsmall};
  color: ${colors.darkgray};
`;

export const ContainerTask = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  ${media.desktop} {
    gap: 20px;
  }

  ${media.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
