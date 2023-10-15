import { produce } from 'immer'

import { ActionType } from "./actions"

export interface Coffee {
  id: number
  name: string
  price: string
  amount: number
}

interface CartState {
  cart: Coffee[]
}

export function cartReducer(state: CartState, action: any){
  switch (action.type) {
    case ActionType.ADD_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        console.log(draft.cart)
      })
      
  default:
    return state
  }
}