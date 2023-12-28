import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  Header,
  PaymentFooter,
  CartSide,
  AddressContainer,
  CartContainer,
  Input,
  PaymentWrapper,
  PaymentButton,
  Details,
} from './styles'
import { CoffeeRow } from '../../components/CoffeeRow'
import { coffees } from '../../../data.json'
import { priceFormatter } from '../../utils/formatter'

export function Cart() {
  return (
    <CartContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <Header>
            <MapPinLine size={22} />
            <div>
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Header>
          <div>
            <Input id="CEP" type="text" placeholder="CEP" />
            <Input id="RUA" type="text" placeholder="Rua" />
            <Input id="NUM" type="text" placeholder="Número" />
            <Input id="COM" type="text" placeholder="Complemento" />
            <Input id="BAI" type="text" placeholder="Bairro" />
            <Input id="CITY" type="text" placeholder="Cidade" />
            <Input id="UF" type="text" placeholder="UF" />
          </div>
        </AddressContainer>
        <PaymentFooter>
          <Header>
            <CurrencyDollar size={22} />
            <div>
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Header>
          <PaymentWrapper>
            <PaymentButton value="credit">
              <CreditCard /> Cartão de crédito
            </PaymentButton>
            <PaymentButton value="debit">
              <Bank /> cartão de débito
            </PaymentButton>
            <PaymentButton value="money">
              <Money /> dinheiro
            </PaymentButton>
          </PaymentWrapper>
        </PaymentFooter>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CartSide>
          <CoffeeRow coffee={coffees[0]} />
          <CoffeeRow coffee={coffees[1]} />
        </CartSide>
        <Details>
          <div>
            <p>Total de itens</p>
            <span>{priceFormatter(29.7)}</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>{priceFormatter(3.5)}</span>
          </div>
          <div>
            <h1>Total</h1>
            <h1>{priceFormatter(33.2)}</h1>
          </div>
          <button>Confirmar pedido</button>
        </Details>
      </div>
    </CartContainer>
  )
}
