import { Hero } from '../../components/Hero'
import { Header } from '../../components/header'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Hero />
    </HomeContainer>
  )
}
