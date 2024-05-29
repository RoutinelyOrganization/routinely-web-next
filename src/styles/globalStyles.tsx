'use client';

import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scrollbar-color: ${colors.primary} ${colors.white} ;

    &::-webkit-scrollbar {
        width: 10px;
     }

    &::-webkit-scrollbar-thumb {
        background: ${colors.primary};
    }

  	&::-webkit-scrollbar-track {
  		background-color: ${colors.white};
  	}
  }
  body {
    background-color: ${colors.white};
  }
`;
