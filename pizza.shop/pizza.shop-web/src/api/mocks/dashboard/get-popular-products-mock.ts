import type { getPopularProductsResponseBody } from '@/api/dashboard/get-popular-products'
import { http, HttpResponse } from 'msw'

export const getPopularProductsMock = http.get<
  never,
  never,
  getPopularProductsResponseBody
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      amount: 100,
      product: 'Pizza Margherita',
    },
    {
      amount: 180,
      product: 'Pizza Calabresa',
    },
    {
      amount: 350,
      product: 'Pizza Nordestina',
    },
    {
      amount: 100,
      product: 'Pizza Arretada',
    },
  ])
})
