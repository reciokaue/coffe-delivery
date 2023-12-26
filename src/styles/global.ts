import styled, { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: 0 auto;
`
