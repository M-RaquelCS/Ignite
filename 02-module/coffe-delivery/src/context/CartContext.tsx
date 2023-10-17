import { ReactNode, createContext, useState } from "react";

interface Coffee {
  id: number
  amount: number
}

interface Order {
  id: Date,
  address: {
    cep: string,
    street: string,
    number: number,
    complement?: string,
    neighborhood: string,
    city: string,
    uf: string,
  },
  typePayment: string,
  coffees: Coffee[]
}

interface ProductToCartData {
  idCoffee: number;
  amountCoffee: number;
}

interface CartContextType {
  cart: Coffee[]
  addProductToCart: (data: ProductToCartData) => void,
  removeProductToCart: (id: number) => void,
  createNewOrder: (data: Order) => void
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

  const [ orders, setOrders ] = useState<Order[]>(() => {
    const storedOrder = localStorage.getItem('@coffee-delivery:orders')
    if (storedOrder) {
      return JSON.parse(storedOrder)
    }

    return []
  })

  function addProductToCart(data: ProductToCartData){
    try {
      
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

  function removeProductToCart(id: number){
    try {
      const cloneArrayCart = [...cart]
      const IndexCoffee = cloneArrayCart.findIndex(coffee => coffee.id === id)

      if(IndexCoffee >= 0) { //caso ele não encontre, ele retorna -1
        cloneArrayCart.splice(IndexCoffee, 1)
      } else {
        throw Error()
      }

      setCart(cloneArrayCart)
      localStorage.setItem('@coffee-delivery:cart', JSON.stringify(cloneArrayCart))

    } catch (e) {
      console.log(e)
    }
  }

  function createNewOrder(data: Order) {
    try{
      const cloneArrayOrders = [...orders]

      cloneArrayOrders.push(data)
      setOrders(cloneArrayOrders)
      localStorage.setItem('@coffee-delivery:orders', JSON.stringify(cloneArrayOrders))

    }catch(e){
      console.log(e)
    }
  }

  return(
    <CartContext.Provider 
      value={{
        cart,
        addProductToCart,
        removeProductToCart,
        createNewOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}