import type { GetOrdersDetailsParams, GetOrdersDetailsResponse } from '@/api/orders/get-orders-details'
import { http, HttpResponse } from 'msw'

export const getOrderDetailsMock = http.get<GetOrdersDetailsParams, never, GetOrdersDetailsResponse>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'jhon.doe@example.com',
      phone: '999898282',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 2,
        product: {
          name: 'Pizza Pepperoni'
        }
      },
      {
        id: 'order-item-2',
        priceInCents: 5000,
        quantity: 1,
        product: {
          name: 'Product Calachese'
        }
      }
    ],
    totalInCents: 6000 // Add the totalInCents property
  })
})