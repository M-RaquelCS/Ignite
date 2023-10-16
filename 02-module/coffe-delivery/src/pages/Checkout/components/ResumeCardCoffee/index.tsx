import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

import { coffees } from "../../../../utils/coffees";

import { Trash } from "@phosphor-icons/react";
import { ActionsCoffeeRow, DetailsRow, RemoveButton, ResumeCardCoffeeContainer, TitleCoffeeRow } from "./styles";

interface IResumeCardCoffee {
  id: number
  amount: number
}

export function ResumeCardCoffee({ id,amount }: IResumeCardCoffee){

  const { removeProductToCart } = useContext(CartContext)
  const data = coffees.find(coffee => coffee.id === id)

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
          {amount}
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