'use client';

import styled from 'styled-components';

export const ContainerText = styled.p`
  margin: 0;
`;

export const ContainerDoubleButton = styled.div`
  /* margin-top: 24px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr; */

  display: flex;
  justify-content: center;
  margin-top: 24px;
  column-gap: 16px;

  > button {
    width: 50%;
  }
`;

// export const ContainerOneButton = styled.div`
//   margin-top: 24px;
//   margin-left: auto;
//   margin-right: auto;
//   width: 50%;
// `;
