import { createGlobalStyle } from "styled-components"
import { ThemeType } from "../state/context/ThemeContextProvider"

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background-image: url('../images/safe.jpg')!important;; 
    background:${({ theme }) => theme.colors.body};
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
  h1 {
    color: hsl(192, 100%, 9%);
  }
  h3 {
    color: hsl(192, 100%, 9%);
  }
  h4 {
    color: hsl(192, 100%, 9%);
  }
`
