import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'

import Logo from '../../../public/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

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
