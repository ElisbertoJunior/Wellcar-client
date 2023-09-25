import { createGlobalStyle } from "styled-components";

export const colors = {
  blackColor: '#000',
  whiteColor: '#fff',
  grayColor: '#FBFAF7'

}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    height: 100vh;
    width: 100vw;
  }
`
export default GlobalStyle;