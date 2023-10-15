import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

import { ShoppingCart } from "@phosphor-icons/react";
import { AmountItemsOnCart, CartLinkContainer } from "./styles";

export function CartLink(){

  const { cart } = useContext(CartContext)
  const quantityTypeItemsOnCart = cart.length

  return (
    <>
      <CartLinkContainer href="/checkout">
        {quantityTypeItemsOnCart >= 1 
            && 
          <AmountItemsOnCart>{quantityTypeItemsOnCart}</AmountItemsOnCart>
        }

        <ShoppingCart size={22} weight="fill" />
        
      </CartLinkContainer>
    </>
  )
}