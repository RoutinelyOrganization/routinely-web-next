'use client';

import { Button } from '@/components/buttons/ButtonPrimary/styles';
import { fonts } from '@/styles/variables';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 500px;
  width: 100%;

  ${Button} {
    max-width: 192px;
  }
`;

export const Span = styled.span`
  display: block;
  font-size: ${fonts.sizes.xxxsmall};
  line-height: 16px;
  letter-spacing: 0.5px;
  margin: 16px 0;
`;
