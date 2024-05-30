'use client';

import { colors, fonts } from '@/styles/variables';
import Link from 'next/link';
import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  padding: 10px 16px;

  width: 100%;
  border-radius: 8px;
  font-size: ${fonts.sizes.xxxsmall};
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  background-color: ${colors.white};
  color: ${colors.primary};
  border: 1px ${colors.primary} solid;
  outline: none;
  &:hover {
    transition: all 0.4s ease;
    background-color: ${colors.tertiary};
    color: #222;
    font-weight: bold;
  }
`;

export const LinkNext = styled(Link)`
  width: 100%;
`;
