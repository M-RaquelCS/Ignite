import { ReactNode, createContext, useContext, useState } from 'react'

interface ICoffee {
  id: number
  img: string
  tags: string[]
  name: string
  description: string
  price: number
}

export interface IItemCart extends ICoffee {
  quantity: number
}

interface IStoreContext {
  cart: IItemCart[]
  addProduct: (coffee: IItemCart) => Promise<void>
}

interface StoreContextProviderProps {
  children: ReactNode
}

const StoreContext = createContext({} as IStoreContext)

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  const [cart, setCart] = useState<IItemCart[]>(() => {
    const storageCart = localStorage.getItem('@CoffeeDelivery:cart')
    if (storageCart) {
      return JSON.parse(storageCart)
    }
    return []
  })

  async function addProduct(coffee: IItemCart) {
    try {
      const updatedCart = [...cart] // imutabilidade

      const productExists = updatedCart.find(
        (product) => product.id === coffee.id,
      ) // verificando se o produto existe no carrinho

      console.log(productExists)

      const newCart = produce(cartItems, (draft) => {
        if (coffeeAlreadyExistsInCart < 0) {
          draft.push(coffee)
        } else {
          draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
        }
      })

      setCart(newCart)
    } catch {}
  }

  return (
    <StoreContext.Provider value={{ cart, addProduct }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useCart = () => {
  return useContext(StoreContext)
}
