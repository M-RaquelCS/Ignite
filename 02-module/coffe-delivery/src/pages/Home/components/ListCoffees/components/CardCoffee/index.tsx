import { useContext, useState } from 'react';
import { CartContext } from '../../../../../../hooks/useCart';

import { ShoppingCart } from '@phosphor-icons/react'

import { CardCoffeeContainer, Price, PriceAndQuantityRow, Quantity, QuantitySubmitRow, Tags, TagsRow, TextContent } from "./styles";

type CardCoffeeProps = {
  coffeeObject: {
    id: number;
    tags: string[];
    name: string;
    description: string;
    img: string;
    price: string;
  }
}

export function CardCoffee({ coffeeObject }: CardCoffeeProps){

  const [ coffeeQuantity, setCoffeeQuantity ] = useState(0)
  const { addProductToCart } = useContext(CartContext)
  
  function handleAddCoffeeToCart(e: React.FormEvent){
    e.preventDefault()

    const data = {
      idCoffee: coffeeObject.id,
      amountCoffee: coffeeQuantity
    }

    addProductToCart(data)
  }

  return (
    <CardCoffeeContainer key={coffeeObject.id}>

      <img src={coffeeObject.img}/>
      
      <TagsRow>
        {coffeeObject.tags.map((tag, index) => {
          return(
            <Tags key={index}>{tag}</Tags>
          )
        })}
      </TagsRow>
      
      <TextContent>
        <h4>{coffeeObject.name}</h4>
        <p>{coffeeObject.description}</p>
      </TextContent>

      <PriceAndQuantityRow>
        <Price>
          <span>R$</span>
          <h5>{coffeeObject.price}</h5>
        </Price>

        <QuantitySubmitRow as='form' onSubmit={handleAddCoffeeToCart}>
          <Quantity 
            type="number" 
            min={1} 
            max={10}
            onChange={e => setCoffeeQuantity(Number(e.target.value))}
          />
          <button type='submit'>
            <ShoppingCart size={18} weight="fill" />
          </button>
        </QuantitySubmitRow>
      
      </PriceAndQuantityRow>

    </CardCoffeeContainer>
  )
}