import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['brown-500']};
    -webkit-font-smoothing: antialiased;
  }
`
