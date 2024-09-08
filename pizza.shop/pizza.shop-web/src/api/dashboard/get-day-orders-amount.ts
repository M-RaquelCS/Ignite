import { api } from "../../lib/axios";

export interface getDayOrdersAmountResponseBody {
  amount: number;
  diffFromYesterday: number
}

export async function getDayOrdersAmount(){
  const response = await api.get<getDayOrdersAmountResponseBody>('/metrics/day-orders-amount')
  return response.data

}