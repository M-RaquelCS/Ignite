import { Data, Container, OrderData, TitleData } from './styles'

import motoboyImg from '../../../public/motoboy.svg'
import { ItemIntro } from '../Home/components/Intro/styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <Container>
      <OrderData>
        <div>
          <h1>Uhu! Pedido Confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <Data>
          <ItemIntro backgroundcolor="purple">
            <MapPin size={22} weight="fill" />
            <div>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </ItemIntro>
          <ItemIntro backgroundcolor="yellowLight">
            <Timer size={22} weight="fill" />
            <TitleData>
              Previsão de entrega
              <strong>20 min - 30 min</strong>
            </TitleData>
          </ItemIntro>
          <ItemIntro backgroundcolor="yellow">
            <CurrencyDollar size={22} />
            <TitleData>
              Pagamento na entrega
              <strong>Em dinheiro</strong>
            </TitleData>
          </ItemIntro>
        </Data>
      </OrderData>
      <img
        src={motoboyImg}
        alt="imagem de uma pessoa em uma moto simulando a ida para um entrega de pedido"
      />
    </Container>
  )
}
