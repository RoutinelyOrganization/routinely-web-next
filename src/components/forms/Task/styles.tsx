'use client';

import { Button as ButtonSecondary } from '@/components/buttons/ButtonSecondary/styles';
import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import Image from 'next/image';
import styled from 'styled-components';
import { ErrorMessage } from '../fields/ErrorMessage/styles';
import { Div as InputContainer } from '../fields/Input/styles';

export const ResponsiveContainer = styled.div`
  .center-form {
    padding: 24px;
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  background-color: ${colors.white};
  position: relative;
  max-width: 463px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageNext = styled(Image)`
  cursor: pointer;
`;

export const Description = styled.span`
  background-color: ${colors.gray};
  font-size: calc(${fonts.sizes.xxxsmall} - 2px);
  padding: 8px;
  border-radius: 8px;
  position: absolute;
  top: 26px;
  left: 0;
  z-index: 5;
  width: 100%;
  display: none;
  color: ${colors.black};
  font-weight: normal;
`;

export const ContainerDateTime = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
`;

export const Title = styled.h1`
  font-size: ${fonts.sizes.medium};
  font-weight: bold;
  color: ${colors.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: capitalize;

  > span {
    cursor: pointer;
    > img {
      padding-top: 5px;
    }
    &:hover {
      > ${Description} {
        display: block;
      }
    }
  }
`;

export const ContainerOpenWeekFrequency = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

export const QuantityPerWeekParagraph = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & ${InputContainer} {
    width: 55px;
    > div {
      height: 55px;
    }
    & input {
      padding: 8px;
      text-align: center;
      &::placeholder {
        color: ${colors.black};
      }
    }
  }
  ~ ${ErrorMessage} {
    margin-top: -15px;
  }
`;

export const ContainerCalendar = styled.div`
  padding-right: 6px;
  display: grid;
  grid-template-columns: 35% 65%;
`;

export const ContainerSelectWeekDays = styled.div`
  margin: 8px 0;
  display: flex;
  gap: 8px;
`;

export const ContainerButtons = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  justify-content: end;

  > button {
    max-width: 150px;
    min-width: 116px;
    padding: 10px 12px;
  }

  ${ButtonSecondary} {
    border-color: ${colors.shadow};
  }

  ${media.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 24px;

    gap: 20px;
    > button {
      max-width: 100%;
    }
    .mobile {
      grid-row: 1;
      grid-column: span 2;
    }
  }
`;
