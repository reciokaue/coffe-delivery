import styled from 'styled-components'
import { fonts } from '../../styles/fonts'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    > h2 {
      color: ${(props) => props.theme['base-subtitle']};
      ${fonts.titleXS}
    }
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;
  padding: 1.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
`

export const AddressContainer = styled(Container)`
  header > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  > div:last-child {
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
export const PaymentFooter = styled(Container)`
  header > svg {
    color: ${(props) => props.theme.purple};
  }
`
export const CartSide = styled(Container)`
  display: flex;
  width: 100%;
  max-width: 28rem;
  border-radius: 6px 44px 0 0;
`
export const Header = styled.header`
  display: flex;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;

    > h1 {
      color: ${(props) => props.theme['base-subtitle']};
      ${fonts.textM}
    }
    > p {
      color: ${(props) => props.theme['base-text']};
      ${fonts.textS}
    }
  }
`

export const PaymentWrapper = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`
export const PaymentButton = styled(RadioGroup.Item)`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  border-radius: 6px;
  text-transform: uppercase;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  ${fonts.buttonM}
  border: 1px solid transparent;

  svg {
    color: ${(props) => props.theme.purple};
  }
  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px 40px;
  align-items: flex-start;
  gap: 15px;

  border-radius: 0 0 6px 44px;
  background: var(--Base-Card, #f3f2f2);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p,
    span {
      color: ${(props) => props.theme['base-text']};
      ${fonts.textS}
    }
    h1 {
      color: ${(props) => props.theme['base-subtitle']};
      ${fonts.textL}
      font-weight: bold;
    }
  }
  > button {
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 6px;
    background: var(--Brand-Yellow, #dbac2c);
    color: var(--Base-White, #fff);
    margin-top: calc(24 - 15);
    ${fonts.buttonG}
  }
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
