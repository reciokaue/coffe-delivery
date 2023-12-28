import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      gap: 0.25rem;
      border-radius: 6px;

      &:first-child {
        background: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['purple-dark']};

        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }
      &:last-child {
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
      }

      &:hover {
        opacity: 0.7;
        transition: opacity 200ms;
      }
    }
  }
`
