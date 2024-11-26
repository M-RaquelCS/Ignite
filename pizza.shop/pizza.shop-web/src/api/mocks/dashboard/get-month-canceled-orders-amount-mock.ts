import type { getMonthCanceledOrdersAmountResponseBody } from '@/api/dashboard/get-month-canceled-orders-amount'
import { http, HttpResponse } from 'msw'

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  getMonthCanceledOrdersAmountResponseBody
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: -50,
  })
})
