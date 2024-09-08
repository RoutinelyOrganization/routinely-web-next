'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';
import { Div as Input } from '../fields/Input/styles';

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ShowPasswordSpand = styled.span`
  color: ${colors.black};
  font-size: ${fonts.sizes.xxxsmall};
  line-height: 16px;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
`;

export const TermsOfUseContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;

  & > span {
    color: ${colors.black};
    font-size: ${fonts.sizes.xxxsmall};
    line-height: 16px;
    letter-spacing: 0.5px;

    & > a {
      color: ${colors.black};
    }
  }
`;

export const ContainerPasswords = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${media.desktop} {
    flex-direction: row;
    gap: 6%;

    & ${Input} {
      width: 47%;
    }
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 10px;

    & ${Input} {
      width: 100%;
    }
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.desktop} {
    flex-direction: row;
  }

  ${media.mobile} {
    flex-direction: column;
  }
`;
