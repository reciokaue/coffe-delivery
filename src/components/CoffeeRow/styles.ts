import styled from 'styled-components'
import { fonts } from '../../styles/fonts'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > img {
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
  }

  > div > h2 {
    color: ${(props) => props.theme['base-subtitle']};
    ${fonts.textM}
    margin-bottom: 0.5rem;
  }
  > strong {
    color: ${(props) => props.theme['base-text']};
    ${fonts.textM}
    font-weight: bold;
    align-self: self-start;
  }
`
export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2rem;
    padding: 0 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;

    ${fonts.buttonM}
    line-height: 0;
    text-transform: uppercase;
    background: ${(props) => props.theme['base-button']};

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
    > svg {
      color: ${(props) => props.theme.purple};
    }
  }
`
export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  height: 2rem;

  > span {
    color: ${(props) => props.theme['base-title']};
    ${fonts.textS}
    line-height: 0;
  }
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: ${(props) => props.theme.purple};
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
