import { ShoppingCart } from 'phosphor-react'
import {
  Buy,
  BuyActions,
  CardCoffee,
  CoffeeAmountInput,
  ContainerListCoffees,
  DescriptionCoffee,
  ShoppingButton,
  Tags,
} from './styles'
import { coffees } from '../../../../utils/coffees'

export function CoffeeList() {
  return (
    <>
      <h1>Nossos cafés</h1>
      <ContainerListCoffees>
        {coffees.map((coffee) => {
          return (
            <CardCoffee key={coffee.id}>
              <img src={coffee.img} alt="imagem do café" />

              <Tags>
                {coffee.tags.map((tag) => {
                  return <span key={tag}>{tag}</span>
                })}
                <span>gelado</span>
              </Tags>

              <DescriptionCoffee>
                <h2>{coffee.name}</h2>
                <p>{coffee.description}</p>
              </DescriptionCoffee>

              <Buy>
                <p>
                  R$ <strong>{coffee.price}</strong>
                </p>
                <BuyActions>
                  <CoffeeAmountInput
                    type="number"
                    id="CoffeeAmount"
                    placeholder="1"
                    min={1}
                  />
                  <ShoppingButton type="button">
                    <ShoppingCart size={22} weight="fill" />
                  </ShoppingButton>
                </BuyActions>
              </Buy>
            </CardCoffee>
          )
        })}
      </ContainerListCoffees>
    </>
  )
}
