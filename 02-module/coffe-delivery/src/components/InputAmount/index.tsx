import { Minus, Plus } from "@phosphor-icons/react"
import { Container } from "./styles"

type InputAmountProps = {
  amount: number,
  plusAmount: () => void,
  minusAmount: () => void,
}

export function InputAmount({ amount, minusAmount, plusAmount }: InputAmountProps){

  function handlePlusAmount(){
    plusAmount()
  }
  function handleMinusAmount(){
    minusAmount()
  }

  return (
    <Container>
      <Plus onClick={handlePlusAmount} />
      {amount}
      <Minus onClick={handleMinusAmount} />
    </Container>
  )
}