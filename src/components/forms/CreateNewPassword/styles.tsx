'use client';

import { Button } from '@/components/buttons/ButtonPrimary/styles';
import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
`;

export const ContainerPasswords = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Button} {
    max-width: 192px;
  }

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const ShowPasswordSpand = styled.span`
  color: ${colors.black};
  font-size: ${fonts.sizes.xxxsmall};
  line-height: 16px;
  letter-spacing: 0.5px;
  cursor: pointer;
`;
