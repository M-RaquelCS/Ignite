import { api } from "../../lib/axios";

export interface getDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
} 

export type getDailyRevenueInPeriodResponseBody = {
  receipt: number;
  date: string
}[]

export async function getDailyRevenueInPeriod({from, to}: getDailyRevenueInPeriodQuery){
  const response = await api.get<getDailyRevenueInPeriodResponseBody>('/metrics/daily-receipt-in-period', {
    params: { from, to },
  });
  return response.data
}