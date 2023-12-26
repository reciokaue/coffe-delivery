import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Amount, CoffeeCardContainer, Footer, Label } from './styles'
import { useState } from 'react'

interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1)

  const add = () => setAmount((state) => state + 1)
  const subtract = () => setAmount((state) => (state > 1 ? state - 1 : 1))

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <div>
        {coffee.tags.map((tag) => (
          <Label key={tag}>{tag}</Label>
        ))}
      </div>
      <h1>{coffee.title}</h1>
      <p>{coffee.description}</p>
      <Footer>
        <span>
          R$
          <strong> {coffee.price}</strong>
        </span>
        <Amount>
          <button onClick={subtract}>
            <Minus size={14} />
          </button>
          <span>{amount}</span>
          <button onClick={add}>
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
