import { ReactNode, createContext, useState } from "react";
import { toast } from 'react-toastify'

import { coffees } from "../utils/coffees";
import { formatCurrency } from "../utils/formatCurrency";

interface Coffee {
  id: number
  amount: number
}

interface Order {
  id: string,
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
  cart: Coffee[],
  orders: Order[]
  addProductToCart: (data: ProductToCartData) => void,
  removeProductToCart: (id: number) => void,
  createNewOrder: (data: Order) => void,
  cartItemsTotal: number,
  OrderTotal: number,
  valueToDelivery: number
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps){

  const valueToDelivery = 5.00

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
    } catch (e) {
      toast.error('Algo deu errado, tente novamente mais tarde.')
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
      toast.error('Algo deu errado, tente novamente mais tarde.')
      console.log(e)
    }
  }

  function createNewOrder(data: Order) {
    try{
      const cloneArrayOrders = [...orders]

      cloneArrayOrders.push(data)
      setOrders(cloneArrayOrders)
      localStorage.setItem('@coffee-delivery:orders', JSON.stringify(cloneArrayOrders))
      localStorage.removeItem('@coffee-delivery:cart')
    }catch(e){
      toast.error('Algo deu errado, tente novamente mais tarde.')
      console.log(e)
    }
  }

  const cartItemsFormatted = cart.map( product => {
    const data = coffees.find(coffee => coffee.id === product.id)
    if (data) {
      const dataFormatted = {
        id: product.id,
        amount: product.amount,
        price: formatCurrency(data.price) as number
        
      }
      return dataFormatted
    }
  })

  const cartItemsTotal = cartItemsFormatted.reduce((accumulator, item) => {
    if (item) {
      return  accumulator + (item.price * item.amount)
    }
    return accumulator
  }, 0)

  const OrderTotal = cartItemsTotal + valueToDelivery

  return(
    <CartContext.Provider 
      value={{
        cart,
        orders,
        addProductToCart,
        removeProductToCart,
        createNewOrder,
        cartItemsTotal,
        OrderTotal,
        valueToDelivery
      }}
    >
      {children}
    </CartContext.Provider>
  )
}