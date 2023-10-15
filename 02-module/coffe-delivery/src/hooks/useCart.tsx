import { ReactNode, createContext, useState } from "react";

interface Coffee {
  id: number
  amount: number
}

interface ProductToCartData {
  idCoffee: number;
  amountCoffee: number;
}

interface CartContextType {
  cart: Coffee[]
  addProductToCart: (data: ProductToCartData) => void,
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps){

  const [ cart, setCart ] = useState<Coffee[]>(() => {
    const storedCart = localStorage.getItem('@coffee-delivery:cart')
    // console.log(storedCart)

    if (storedCart) {
      // console.log(JSON.stringify(storedCart))
      return JSON.parse(storedCart)
    }

    return []
  })

  function addProductToCart(data: ProductToCartData){
    try {
      // console.log(cart)
      const cloneArrayCart = [...cart]
      // console.log(cloneArrayCart)
      const productExists = cloneArrayCart.find(coffee => coffee.id === data.idCoffee)

      if (productExists) {
        productExists.amount = data.amountCoffee
      }else {
        const itemCoffee = {
          id: data.idCoffee,
          amount: data.amountCoffee
        }
        // console.log(itemCoffee)
        cloneArrayCart.push(itemCoffee)
      }

      setCart(cloneArrayCart)
      // console.log(cloneArrayCart)
      localStorage.setItem('@coffee-delivery:cart', JSON.stringify(cloneArrayCart))
      // localStorage.clear()
    } catch (e) {
      console.log(e)
    }
    
  }

  return(
    <CartContext.Provider 
      value={{
        cart,
        addProductToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}