import { ErrorMessage } from '@/components/forms/fields/ErrorMessage/styles';
import styled from 'styled-components';

export const ContainerErrors = styled.div`
  width: 100%;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;

  > ${ErrorMessage} {
    margin-bottom: -5px;
  }
`;
