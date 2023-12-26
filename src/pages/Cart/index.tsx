import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  Header,
  PaymentFooter,
  CartSide,
  AddressContainer,
  CartContainer,
  Input,
} from './styles'

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
        </PaymentFooter>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CartSide>a</CartSide>
      </div>
    </CartContainer>
  )
}
