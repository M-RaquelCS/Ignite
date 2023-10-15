import { ReactNode, createContext, useEffect, useReducer } from "react";
import { Coffee, cartReducer } from "../reducers/cart/reducer";
import { addProductToCartAction } from "../reducers/cart/actions";

interface ProductToCartData {
  idCoffee: number;
  nameCoffee: string
  priceCoffee: string
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

  const [state, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart'
      )
      if (storedStateAsJSON){
        return JSON.parse(storedStateAsJSON) 
      }
      return initialState
    }
  )

  const { cart } = state
  console.log(cart)

  useEffect(() => {
    const stateJSON = JSON.stringify(state)
    localStorage.setItem('@coffee-delivery:cart', JSON.stringify(stateJSON))
  }, [state])

  function addProductToCart(data: ProductToCartData){
    const itemCoffee = {
      id: data.idCoffee,
      name: data.nameCoffee,
      price: data.priceCoffee,
      amount: data.amountCoffee
    }

    console.log(itemCoffee)
    dispatch(addProductToCartAction(itemCoffee))
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