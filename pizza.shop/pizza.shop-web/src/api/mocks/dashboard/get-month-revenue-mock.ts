import type { getMonthRevenueResponseBody } from '@/api/dashboard/get-month-revenue'
import { http, HttpResponse } from 'msw'

export const getMonthRevenueMock = http.get<
  never,
  never,
  getMonthRevenueResponseBody
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: -50,
  })
})
