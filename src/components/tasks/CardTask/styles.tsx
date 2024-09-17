'use client';

import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

interface ICardTaskStyles {
  checked: boolean;
  category: 'habit' | 'task';
}

type IItemOptionsStyles = {
  [key in ICardTaskStyles['category']]: { color: string; bgcolor: string; checkBgColor?: string };
};

const options: IItemOptionsStyles = {
  habit: {
    color: colors.primary,
    bgcolor: colors.lightPurple,
    checkBgColor: colors.purple,
  },
  task: {
    color: colors.darkBlue,
    bgcolor: colors.lightBlue,
    checkBgColor: colors.blue,
  },
};

export const Title = styled.h2`
  font-size: ${fonts.sizes.xsmall};
  line-height: 20px;
  font-weight: bold;

  > i {
    font-size: ${fonts.sizes.xxxsmall};
    margin-right: 5px;
  }
`;

export const ContainerDescription = styled.div`
  max-width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  &:last-child {
  }

  > p {
    max-width: 100%;
    word-break: break-all;
  }

  > label {
    > span {
      position: relative;
      z-index: 11;
    }
  }
`;

export const Container = styled.div<ICardTaskStyles>`
  max-width: 300px;
  background-color: ${({ category }) => options[category].bgcolor};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  z-index: 1;
  border: 1px solid ${({ category }) => options[category].color};

  ${Title} {
    color: ${({ category }) => options[category].color};
  }

  ${ContainerDescription} {
    > p {
      margin: 0;
      text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
    }
  }
  ${({ checked, category }) =>
    checked &&
    `
   background-color: ${options[category].checkBgColor};  
  `}

  ${media.mobile} {
    max-width: 100%;
  }
`;

export const ContainerBtnIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px;
`;

export const Button = styled.span`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background-color: ${colors.darkBlue};
  border-radius: 8px;
  border: none;
  font-size: 14px;
  color: ${colors.white};
`;
