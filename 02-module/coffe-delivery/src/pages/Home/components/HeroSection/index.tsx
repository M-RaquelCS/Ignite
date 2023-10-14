import { GridTopicsContainer, HeroSectionContainer, HeroSectionContent, TextSectionContainer, TopicImg, TopicItem } from './styles'

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import CoffeeImg from './assets/coffee.png'

export function HeroSection() {
  return(
    <HeroSectionContainer>
      <HeroSectionContent>
        <TextSectionContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>
          <GridTopicsContainer>

            <TopicItem>
              <TopicImg topicscolor='yellow_dark'>
                <ShoppingCart size={16} weight="fill" />
              </TopicImg>
              <p>Compra simples e segura</p>
            </TopicItem>

            <TopicItem>
              <TopicImg topicscolor='gray'>
                <Package size={16} weight="fill" />
              </TopicImg>
              <p>Embalagem mantém o café intacto</p>
            </TopicItem>

            <TopicItem>
              <TopicImg topicscolor='yellow'>
                <Timer size={16} weight="fill" />
              </TopicImg>
              <p>Entrega rápida e rastreada</p>
            </TopicItem>

            <TopicItem>
              <TopicImg topicscolor='purple'>
                <Coffee size={16} weight="fill" />
              </TopicImg>
              <p>O café chega fresquinho até você</p>
            </TopicItem>

          </GridTopicsContainer>
        </TextSectionContainer>
        <section>
          <img src={CoffeeImg} alt="" />
        </section>
      </HeroSectionContent>
    </HeroSectionContainer>
  )
}