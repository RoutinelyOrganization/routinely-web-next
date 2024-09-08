import { ContainerTypeTask } from '@/components/tasks/AddNewTask/styles';
import media from '@/styles/mediaQueries';
import styled from 'styled-components';

export const Container = styled.div`
  > header {
    position: sticky;
    top: 0;
    z-index: 21;
  }
  padding-bottom: 42px;
`;

export const ContainerFooter = styled.div`
  ${ContainerTypeTask} {
    display: none;
    bottom: 56px;
    top: auto;

    ${media.mobile} {
      display: block;
    }
  }
`;
