import type { getDailyRevenueInPeriodResponseBody } from '@/api/dashboard/get-daily-revenue-in-period'
import { http, HttpResponse } from 'msw'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  getDailyRevenueInPeriodResponseBody
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      receipt: 300,
      date: '25/11/2024',
    },
    {
      receipt: 340,
      date: '26/11/2024',
    },
    {
      receipt: 380,
      date: '27/11/2024',
    },
    {
      receipt: 420,
      date: '28/11/2024',
    },
    {
      receipt: 460,
      date: '29/11/2024',
    },
    {
      receipt: 500,
      date: '30/11/2024',
    },
    {
      receipt: 540,
      date: '25/11/2024',
    },
  ])
})
