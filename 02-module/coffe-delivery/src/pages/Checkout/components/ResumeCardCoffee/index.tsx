import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CartContext";

import { coffees } from "../../../../utils/coffees";

import { Trash } from "@phosphor-icons/react";
import { ActionsCoffeeRow, DetailsRow, RemoveButton, ResumeCardCoffeeContainer, TitleCoffeeRow } from "./styles";
import { InputAmount } from "../../../../components/InputAmount";

interface IResumeCardCoffee {
  id: number
  amount: number
}

export function ResumeCardCoffee({ id,amount }: IResumeCardCoffee){

  const { removeProductToCart, addProductToCart } = useContext(CartContext)
  const data = coffees.find(coffee => coffee.id === id)

  const [ coffeeQuantity, setCoffeeQuantity ] = useState(() => (amount ? amount : 0))

  function handlePlusAmount(){
    if (coffeeQuantity < 10){
      setCoffeeQuantity((state) => state + 1)
    }
  }
  function handleMinusAmount(){
    if (coffeeQuantity >= 1) {
      setCoffeeQuantity((state) => state - 1)
    }
  }

  useEffect(() => {
    if (data){
      const coffee = {
        idCoffee: data.id,
        amountCoffee: coffeeQuantity
      }
      addProductToCart(coffee)
    }
    
  }, [coffeeQuantity])

  return(
    <ResumeCardCoffeeContainer>
      <img 
        src={data?.img}
        alt={data?.name} 
      />

      <DetailsRow>

        <TitleCoffeeRow>
          <p>{data?.name}</p>
          <strong>R$ {data?.price}</strong>
        </TitleCoffeeRow>

        <ActionsCoffeeRow>
          <InputAmount amount={coffeeQuantity} minusAmount={handleMinusAmount} plusAmount={handlePlusAmount} />
          <RemoveButton
            onClick={() => {
              if (data) {
                removeProductToCart(data?.id)
              }
            }}
          >
            <Trash size={16}/>
            Remover
          </RemoveButton>
        </ActionsCoffeeRow>

      </DetailsRow>

    </ResumeCardCoffeeContainer>
  )
}