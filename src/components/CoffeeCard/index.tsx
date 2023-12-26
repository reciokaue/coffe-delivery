import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Amount, CoffeeCardContainer, Footer, Label } from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="/images/coffees/americano.png" alt="" />
      <Label>tradicional</Label>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <Footer>
        <span>
          R$
          <strong> 9,90</strong>
        </span>
        <Amount>
          <button>
            <Minus size={14} />
          </button>
          <span>1</span>
          <button>
            <Plus size={14} />
          </button>
        </Amount>
        <button id="shopping-button">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </Footer>
    </CoffeeCardContainer>
  )
}
