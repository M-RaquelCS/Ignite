import type { getDayOrdersAmountResponseBody } from '@/api/dashboard/get-day-orders-amount'
import { http, HttpResponse } from 'msw'

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  getDayOrdersAmountResponseBody
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
