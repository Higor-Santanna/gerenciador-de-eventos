import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    background-color: #e2ecff;
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-style: normal;
    touch-action: manipulation;
  }
  
  ul{
    list-style: none;
  }
  
  a{
    text-decoration: none;
    color: black;
  }
  
  input, button {
    all: unset;
    box-sizing: border-box;
  }
`