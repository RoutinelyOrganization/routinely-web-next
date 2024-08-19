import media from '@/styles/mediaQueries';
import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 140px;
  width: 100%;
  background-color: ${colors.lightgray};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;

  > span {
    width: 2px;
    height: 16px;
    background-color: #d8d6dc;
  }

  > img {
    width: 40px;
    padding: 8px;
    &:hover {
      cursor: pointer;
    }
  }

  ${media.desktop} {
    max-width: 200px;
    > img {
      width: 36px;
      padding: 5px;
    }
  }

  ${media.tablet} {
    max-width: 200px;
    > img {
      width: 36px;
      padding: 5px;
    }
  }
`;
