import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEEEEE',
  black: '#111',
  gray: '#333',
  gray2: '#A3A3A3',
  green: '#10AC84',
  red: '#ff584b'
}

export const breakpoints = {
  desktop: '1024px',
  tabet: '768px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
    scroll-behavior: smooth;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export default GlobalStyle
