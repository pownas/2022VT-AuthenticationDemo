import { createGlobalStyle } from "styled-components"
import { ThemeType } from "../state/context/ThemeContextProvider"

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #1C3738 !important;
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  ol, ul{
    padding: 0 !important;

  }

  p {
    opacity: 0.6;
    line-height: 1.0;
  }

  img {
    max-width: 100%;
  }
  h1, h2, h3, h4 {
    color:"#F4FFF8";
    text-align: center;
  }

`
