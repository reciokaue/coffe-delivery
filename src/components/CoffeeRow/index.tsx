import { Minus, Plus, Trash } from 'phosphor-react'
import { Amount, CoffeeCardContainer, Footer } from './styles'
import { useState } from 'react'

export interface Coffee {
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

export function CoffeeRow({ coffee }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1)

  const add = () => setAmount((state) => state + 1)
  const subtract = () => setAmount((state) => (state > 1 ? state - 1 : 1))

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <div>
        <h2>{coffee.title}</h2>
        <Footer>
          <Amount>
            <button onClick={subtract}>
              <Minus size={14} />
            </button>
            <span>{amount}</span>
            <button onClick={add}>
              <Plus size={14} />
            </button>
          </Amount>
          <button>
            <Trash size={16} /> Remover
          </button>
        </Footer>
      </div>
      <strong>R$ {coffee.price}</strong>
    </CoffeeCardContainer>
  )
}
