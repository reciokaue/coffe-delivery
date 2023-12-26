import styled from 'styled-components'
import { fonts } from '../../styles/fonts'

export const CartContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      ${fonts.titleXS}
    }
  }

  section,
  footer,
  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 2rem;
    padding: 2.5rem;

    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};
    margin-top: 1rem;
  }
`
export const Header = styled.header`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      color: ${(props) => props.theme['base-subtitle']};
      ${fonts.textM}
    }
    p {
      color: ${(props) => props.theme['base-text']};
      ${fonts.textS}
    }
  }
`
export const AddressContainer = styled.section`
  header > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  div:last-child {
    display: grid;
    row-gap: 16px;
    column-gap: 12px;
    grid-template-columns: 36% 1fr 7.43%;

    grid-template-areas:
      'CEP span span'
      'RUA RUA RUA'
      'NUM COM COM'
      'BAI CITY UF';
  }
`
export const PaymentFooter = styled.footer`
  header > svg {
    color: ${(props) => props.theme.purple};
  }
`
export const CartSide = styled.aside`
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  display: flex;
  padding: 12px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  &#CEP {
    grid-area: CEP;
  }
  &#RUA {
    grid-area: RUA;
  }
  &#NUM {
    grid-area: NUM;
  }
  &#COM {
    grid-area: COM;
  }
  &#BAI {
    grid-area: BAI;
  }
  &#CITY {
    grid-area: CITY;
  }
  &#UF {
    grid-area: UF;
  }
`
