import styled from 'styled-components'
import { fonts } from '../../styles/fonts'

export const Wrapper = styled.div``

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.875rem 1rem 8.75rem;
  gap: 3.5rem;

  section {
    h1 {
      color: ${(props) => props.theme['base-title']};
      ${fonts.titleXL}
      margin-bottom: 1rem;
    }
    p {
      color: ${(props) => props.theme['base-subtitle']};
      ${fonts.textL}
      margin-bottom: 4.125rem
    }
  }
  div img {
    width: 29.75rem;
    height: 22.5rem;
    flex-shrink: 0;
  }

  img#hero-bg {
    position: absolute;
    inset: 0;
    width: 100vw;
    object-fit: cover;
  }
`
export const Benefits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.75rem;

    color: ${(props) => props.theme['base-text']};
    ${fonts.textM}

    span {
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      border-radius: 50%;
      color: ${(props) => props.theme.white};
    }

    &:nth-child(1) span {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
    &:nth-child(2) span {
      background-color: ${(props) => props.theme['base-text']};
    }
    &:nth-child(3) span {
      background-color: ${(props) => props.theme.yellow};
    }
    &:nth-child(4) span {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
