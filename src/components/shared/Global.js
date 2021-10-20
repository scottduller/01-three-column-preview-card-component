import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }

  html {
    background-color: ${({ theme }) => theme.colors.veryLightGray}
  }

  body {
    font-size: 15px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.transparentWhite};
    
  }

  input, select, textarea, button{font-family:inherit;}
`;

export default GlobalStyles;
