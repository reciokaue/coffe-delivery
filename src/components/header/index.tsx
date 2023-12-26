import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="" />

      <div>
        <button>
          <MapPin size={22} weight="fill" />
          Sorocaba, SP
        </button>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
