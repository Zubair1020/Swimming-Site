import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/*********  Resets  **********/    
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html,
body {
  height: 100%;
  line-height: 1.5;
}
input,
button {
  border: none !important;
  outline: none !important;
}
ul,
li,
a {
  text-decoration: none;
}


body{
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
