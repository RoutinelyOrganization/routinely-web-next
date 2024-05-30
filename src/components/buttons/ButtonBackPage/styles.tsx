'use client';

import { colors, fonts } from '@/styles/variables';
import Link from 'next/link';
import styled from 'styled-components';

export const ButtonBackPage = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: ${fonts.sizes.xxsmall};
  line-height: 20px;
  cursor: pointer;
`;

export const LinkNext = styled(Link)`
  text-decoration: none;
`;
