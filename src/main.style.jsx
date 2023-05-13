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
    background-color: #8BF5FA;
    background-repeat: no-repeat;
    background-image: linear-gradient(45deg,#8BF5FA 15%, #42C2FF 50%);
    background-size: 200%;

}
`;

export default GlobalStyle;
