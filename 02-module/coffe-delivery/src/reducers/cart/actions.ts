import { Coffee } from "./reducer";

export enum ActionType {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
}

export function addProductToCartAction(itemCoffee: Coffee) {
  return {
    type: ActionType.ADD_PRODUCT_TO_CART,
    payload: {
      itemCoffee
    }
  }
}