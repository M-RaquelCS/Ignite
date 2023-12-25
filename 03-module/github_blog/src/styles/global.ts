import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }

  body {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['blue-300']};
    -webkit-font-smoothing: antialiased;
  }
`
