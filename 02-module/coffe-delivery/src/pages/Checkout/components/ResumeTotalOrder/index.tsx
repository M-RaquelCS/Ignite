import { useContext } from "react";
import { ResumeTotalOrderDiv ,ResumeTotalOrderLine, TotalLine } from "./styled";
import { CartContext } from "../../../../context/CartContext";

export function ResumeTotalOrder(){

  const { cartItemsTotal, OrderTotal, valueToDelivery } = useContext(CartContext)

  return (
    <ResumeTotalOrderDiv>
      <ResumeTotalOrderLine>
        <span>Total de itens</span>
        <p>R$ {cartItemsTotal.toFixed(2)}</p>
      </ResumeTotalOrderLine>
      <ResumeTotalOrderLine>
        <span>Entrega</span>
        <p>R$ {valueToDelivery.toFixed(2)}</p>
      </ResumeTotalOrderLine>
      <TotalLine>
        <span>Total</span>
        <p>R$ {OrderTotal.toFixed(2)}</p>
      </TotalLine>
    </ResumeTotalOrderDiv>
  )
}