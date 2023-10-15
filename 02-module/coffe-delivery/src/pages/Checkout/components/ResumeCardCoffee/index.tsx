import { Trash } from "@phosphor-icons/react";
import { ActionsCoffeeRow, DetailsRow, RemoveButton, ResumeCardCoffeeContainer, TitleCoffeeRow } from "./styles";

export function ResumeCardCoffee(){
  return(
    <ResumeCardCoffeeContainer>

      <img 
        src="https://lh3.googleusercontent.com/pw/AJFCJaVMO-LSPUk0P92XEKo0x-zNq2XyjBaE5uJaOhr9PX3kiB4nJGCqg7cSZ9yVg9jnL5NtWL8EiIkueV9hhLZwG0mAjVrqKMeg0WbTZ9b93BUZx3tcqJrvcq5S9RUa_U_NBZvARgbSR1M4o5tms6TM81h-=w120-h120-s-no?authuser=0" 
        alt="coffee img" 
      />

      <DetailsRow>

        <TitleCoffeeRow>
          <p>Café tradicional</p>
          <strong>R$ 9,90</strong>
        </TitleCoffeeRow>

        <ActionsCoffeeRow>
          <RemoveButton>
            <Trash size={16}/>
            Remover
          </RemoveButton>
        </ActionsCoffeeRow>

      </DetailsRow>

    </ResumeCardCoffeeContainer>
  )
}