import { api } from "../../lib/axios";

export interface getMonthOrdersAmountResponseBody {
  amount: number;
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount(){
  const response = await api.get<getMonthOrdersAmountResponseBody>('/metrics/month-orders-amount')
  return response.data

}