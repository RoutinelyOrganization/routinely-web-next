'use client';

import { colors, fonts } from '@/styles/variables';
import Link from 'next/link';
import styled, { css } from 'styled-components';

type ButtonProps = {
  $secondaryColor?: boolean;
  $hover?: boolean;
};

export const Button = styled.button<ButtonProps>`
  max-width: 360px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: ${fonts.sizes.xxxsmall};
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  cursor: pointer;

  ${({ $hover, $secondaryColor }) =>
    $hover &&
    css`
      &:hover {
        transition: all 0.4s ease;
        background-color: ${colors.secondary};
        color: ${colors.black};
        font-weight: bold;
      }

      ${$secondaryColor &&
      css`
        background-color: ${colors.secondary};
        &:hover {
          transition: all 0.4s ease;
          background-color: ${colors.tertiary};
          color: ${colors.white};
          font-weight: bold;
        }
      `}
    `}
`;

export const LinkNext = styled(Link)`
  max-width: 360px;
  width: 100%;
`;
