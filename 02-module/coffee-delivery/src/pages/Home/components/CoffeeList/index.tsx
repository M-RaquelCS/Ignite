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
import { IItemCart, useCart } from '../../../../contexts/StoreContext'
import { useState } from 'react'

export function CoffeeList(item: IItemCart) {
  const { addProduct } = useCart()

  const [quantity, setQuantity] = useState(1)

  function handleAddProductToCart() {
    const data = {
      ...item,
      quantity,
    }
    console.log(data)
    addProduct(data)
    setQuantity(1)
  }

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
                  <ShoppingButton
                    type="button"
                    onClick={handleAddProductToCart}
                  >
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
