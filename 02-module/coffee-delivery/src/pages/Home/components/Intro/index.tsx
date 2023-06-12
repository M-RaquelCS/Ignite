import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { IntroContainer, ItemIntro, ItemsIntro, TitlesIntro } from './styles'

import coffeeImg from '../../../../assets/coffee.png'

export function Intro() {
  return (
    <IntroContainer>
      <section>
        <TitlesIntro>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitlesIntro>
        <ItemsIntro>
          <ItemIntro backgroundcolor="yellow">
            <ShoppingCart size={16} weight="fill" />
            Compra simples e segura
          </ItemIntro>
          <ItemIntro backgroundcolor="brown">
            <Package size={16} weight="fill" />
            Embalagem mantém o café intacto
          </ItemIntro>
          <ItemIntro backgroundcolor="yellowLight">
            <Timer size={16} weight="fill" />
            Entrega rápida e rastreada
          </ItemIntro>
          <ItemIntro backgroundcolor="purple">
            <Coffee size={16} weight="fill" />O café chega fresquinho até você
          </ItemIntro>
        </ItemsIntro>
      </section>
      <section>
        <img
          src={coffeeImg}
          alt="imagem de um copo de café da cafeteria Coffee Delivery com um fundo amarelo e ao lado do copo sementes de café e recipientes com o pó das sementes"
        />
      </section>
    </IntroContainer>
  )
}
