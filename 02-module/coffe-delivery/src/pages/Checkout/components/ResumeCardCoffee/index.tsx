import { Trash } from "@phosphor-icons/react";
import { ActionsCoffeeRow, DetailsRow, RemoveButton, ResumeCardCoffeeContainer, TitleCoffeeRow } from "./styles";
import { coffees } from "../../../../utils/coffees";

interface IResumeCardCoffee {
  id: number
  amount: number
}

export function ResumeCardCoffee({ id,amount }: IResumeCardCoffee){

  const data = coffees.find(coffee => coffee.id === id)
  // console.log(data)

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
          <RemoveButton>
            <Trash size={16}/>
            Remover
          </RemoveButton>
        </ActionsCoffeeRow>

      </DetailsRow>

    </ResumeCardCoffeeContainer>
  )
}