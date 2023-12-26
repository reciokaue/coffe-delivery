import { Benefits, HeroContainer, Wrapper } from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Hero() {
  return (
    <Wrapper>
      <HeroContainer>
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Benefits>
            <div>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </div>
            <div>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </div>
            <div>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </div>
            <div>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você{' '}
            </div>
          </Benefits>
        </section>
        <aside>
          <img src="/images/hero.svg" alt="Coffee" />
        </aside>
      </HeroContainer>
      <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
    </Wrapper>
  )
}
