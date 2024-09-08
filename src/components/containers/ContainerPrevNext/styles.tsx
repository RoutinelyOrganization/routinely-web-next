import media from '@/styles/mediaQueries';
import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 167px;
  height: 48px;
  width: 100%;
  background-color: ${colors.lightgray};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;

  > span {
    width: 2px;
    height: 16px;
    background-color: #d8d6dc;
  }

  > img {
    width: 40%;

    &:hover {
      cursor: pointer;
    }
  }

  ${media.desktop} {
    max-width: 200px;
  }
`;
