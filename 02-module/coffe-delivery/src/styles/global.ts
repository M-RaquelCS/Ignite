import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: clamp(0.75rem,1rem,1.25rem);
    /**
      valores para o tamanho da font de textos, o clamp ou "braçadeira",
      calcula um intervalo de tamanho entre o mínimo aceitável, o valor
      preferencial e o valor máximo (nessa ordem respectiva).
    */
      line-height: 130%;
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: clamp(0.75rem,0.875rem,1rem);
    line-height: 160%;
  }

  h1,h2,h3,h4,h5 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: clamp(1.125rem,1.5rem,3rem);
    line-height: 130%;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }
`