'use client';

import { Button as ButtonSecondary } from '@/components/buttons/ButtonSecondary/styles';
import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import Image from 'next/image';
import styled from 'styled-components';
import { ErrorMessage } from '../fields/ErrorMessage/styles';
import { InputContainer, InputStyle } from '../fields/Input/styles';

export const Form = styled.form`
  position: relative;
  width: 463px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  ${media.mobile} {
    max-height: calc(100vh - 107px);
    min-height: 82vh;
    border-radius: 0px;
    width: calc(100vw - 48px);
    overflow-y: auto;
    padding-bottom: 60px;
  }
`;

export const ImageNext = styled(Image)`
  position: absolute;
  top: 1px;
  right: 0;
  cursor: pointer;
`;

export const Description = styled.span`
  background-color: ${colors.gray};
  font-size: calc(${fonts.sizes.xxxsmall} - 2px);
  padding: 8px;
  border-radius: 8px;
  position: absolute;
  top: 6%;
  left: 0;
  z-index: 5;
  width: 100%;
  display: none;
  color: ${colors.black};
  font-weight: normal;
`;

export const ContainerDateTime = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
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

export const QuantityPerWeekParagraph = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;

  & ${InputContainer} {
    width: 55px;
    > ${InputStyle} {
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
  display: grid;
  grid-template-columns: 40% 60%;
`;

export const ContainerSelectWeekDays = styled.div`
  margin: 8px 0;
  display: flex;
  gap: 8px;
`;

export const ContainerButtons = styled.div`
  margin-top: 32px;
  display: flex;
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
