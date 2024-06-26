import media from '@/styles/mediaQueries';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 192px;
  height: 66px;

  ${media.mobile} {
    width: 156px;
    height: 55px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
