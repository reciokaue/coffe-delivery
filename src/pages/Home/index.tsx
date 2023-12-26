import { CoffeeCard } from '../../components/CoffeeCard'
import { Hero } from '../../components/Hero'
import { Header } from '../../components/header'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <CoffeeCard />
    </HomeContainer>
  )
}
