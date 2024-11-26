import type { getMonthOrdersAmountResponseBody } from '@/api/dashboard/get-month-orders-amount'
import { http, HttpResponse } from 'msw'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  getMonthOrdersAmountResponseBody
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 10,
  })
})
