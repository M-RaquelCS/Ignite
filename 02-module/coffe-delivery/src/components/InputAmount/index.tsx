import { useState } from "react"
import { Minus, Plus } from "@phosphor-icons/react"
import { Container } from "./styles"

type InputAmountProps = {
  amount: number,
  plusAmount: () => void,
  minusAmount: () => void,
}

export function InputAmount({ amount, minusAmount, plusAmount }: InputAmountProps){

  const [ coffeeQuantity, setCoffeeQuantity ] = useState(0)

  if (coffeeQuantity == 10) { // install toastfy
    alert('Quantidade máxima por pedido atingida!')
  }

  function handlePlusAmount(){
    plusAmount()
    if (coffeeQuantity < 10){
      setCoffeeQuantity((state) => state + 1)
    }
  }
  function handleMinusAmount(){
    minusAmount()
    if (coffeeQuantity >= 1)
    setCoffeeQuantity((state) => state - 1)
  }

  return (
    <Container>
      <Plus onClick={handlePlusAmount} />
      {amount}
      <Minus onClick={handleMinusAmount} />
    </Container>
  )
}