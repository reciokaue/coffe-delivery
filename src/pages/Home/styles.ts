import styled from 'styled-components'
import { fonts } from '../../styles/fonts'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CoffeeList = styled.section`
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${fonts.titleL}
    color: ${({ theme }) => theme['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
