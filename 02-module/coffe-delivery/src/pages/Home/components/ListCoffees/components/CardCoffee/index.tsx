import { useContext, useState } from 'react';
import { ShoppingCart } from '@phosphor-icons/react'
import { toast } from 'react-toastify'

import { CartContext } from '../../../../../../context/CartContext';

import { CardCoffeeContainer, Price, PriceAndQuantityRow, QuantitySubmitRow, Tags, TagsRow, TextContent } from "./styles";
import { InputAmount } from '../../../../../../components/InputAmount';

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
    toast.success('Produto adicionado ao carrinho!')
  }

  function handlePlusAmount(){
    if (coffeeQuantity < 10){
      setCoffeeQuantity((state) => state + 1)
    }
  }
  function handleMinusAmount(){
    if (coffeeQuantity >= 1)
    setCoffeeQuantity((state) => state - 1)
  }

  if (coffeeQuantity == 10){
    toast.warn('Quantidade máxima atingida!')
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
          <InputAmount amount={coffeeQuantity} minusAmount={handleMinusAmount} plusAmount={handlePlusAmount} />
          <button type='submit'>
            <ShoppingCart size={18} weight="fill" />
          </button>
        </QuantitySubmitRow>
      
      </PriceAndQuantityRow>

    </CardCoffeeContainer>
  )
}