import { api } from "../../lib/axios";

export interface getMonthCanceledOrdersAmountResponseBody {
  amount: number;
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount(){
  const response = await api.get<getMonthCanceledOrdersAmountResponseBody>('/metrics/month-canceled-orders-amount')
  return response.data

}