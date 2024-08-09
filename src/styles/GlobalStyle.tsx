import { createGlobalStyle } from "styled-components";
import normalize from 'styled-normalize'
// import { Theme } from "../models/theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
      box-sizing: border-box;
  }

  body {
      background-color: ${(props) => props.theme.colors.backgroundSecondary} ;
      padding: 50px 0 0 0;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.429;
      color: black;
      transition: background-color 0.2s ease-in-out
  }

  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
  }

  .Toastify__toast-theme--color {
      background-color: #4682b4;
  }

  .Toastify__progress-bar--wrp {
      margin-bottom: 2px;
  }
  .Toastify__progress-bar-theme--color {
      background-color: white;
  }
`