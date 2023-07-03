import { Trash } from 'phosphor-react'
import { CoffeeAmountInput } from '../../../Home/components/CoffeeList/styles'
import { Actions, CoffeeDetails, Container, Deviser } from './styles'

interface ICardCoffee {
  image: string
  title: string
  price: number
}

export function CardCoffee({ image, title, price }: ICardCoffee) {
  return (
    <>
      <Container>
        <CoffeeDetails>
          <img src={image} alt="imagem do café selecionado" />
          <div>
            <p>{title}</p>
            <Actions>
              <CoffeeAmountInput placeholder="1" type="number" min={1} />
              <button type="button">
                <Trash size={16} />
                REMOVER
              </button>
            </Actions>
          </div>
        </CoffeeDetails>
        <strong>R$ {price}</strong>
      </Container>
      <Deviser></Deviser>
    </>
  )
}
