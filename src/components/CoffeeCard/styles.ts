import styled from 'styled-components'
import { fonts } from '../../styles/fonts'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 16rem;
  height: 19.375rem;
  flex-shrink: 0;
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;

  background: ${(props) => props.theme['base-card']};

  img {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    margin-top: calc(-1.25rem * 2);
  }

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    ${fonts.titleS}
    margin-bottom: 0.5rem;
  }
  p {
    color: ${(props) => props.theme['base-label']};
    ${fonts.textS}
    text-align: center;
  }
`
export const Label = styled.span`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  border-radius: 100px;
  background: ${(props) => props.theme['yellow-light']};

  color: ${(props) => props.theme['yellow-dark']};
  ${fonts.tag}

  margin: 0.75rem 0 1rem;
`
export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.0625rem;

  span {
    color: ${(props) => props.theme['base-text']};
    ${fonts.textS}
    strong {
      ${fonts.titleM}
    }
  }
  button#shopping-button {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 6px;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    &:hover {
      background: ${(props) => props.theme.purple};
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

  span {
    color: ${(props) => props.theme['base-title']};
    ${fonts.textM}
    line-height: 0;
  }
  button {
    background: transparent;
    color: ${(props) => props.theme.purple};
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
