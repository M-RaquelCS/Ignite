import type { GetOrdersResponse } from '@/api/orders/get-orders'
import { http, HttpResponse } from 'msw'

type Orders = GetOrdersResponse['orders']
type Orderstatus = GetOrdersResponse['orders'][number]['status']

const statuses: Orderstatus[] = ['pending', 'canceled', 'processing', 'delivering', 'delivered']

const fakeOrders: Orders = Array.from({ length: 60 }, (_, index) => {
  return {
    orderId: `order-${index + 1}`,
    customerName: `Customer ${index + 1}`,
    createdAt: new Date().toISOString(),
    status: statuses[1 % 5],
    total: Math.floor(Math.random() * 1000) + 100,
  }
})

export const getOrdersMock = http.get<
  never,
  never,
  GetOrdersResponse
>('/orders', async ({ request }) => {
  const { searchParams } = new URL(request.url)

  const pageIndex = searchParams.get( 'pageIndex') ? Number(searchParams.get('pageIndex')) : 0

  const customerName = searchParams.get( 'customerName') 
  const orderId = searchParams.get( 'orderId') 
  const status = searchParams.get( 'status') 

  let filteredOrders = fakeOrders

  if (customerName) {
    filteredOrders = filteredOrders.filter((order) => order.customerName.includes(customerName))
  }

  if (orderId) {
    filteredOrders = filteredOrders.filter((order) => order.orderId.includes(orderId))
  }

  if (status) {
    filteredOrders = filteredOrders.filter((order) => order.status === status)
  }

  const paginatedOrders = filteredOrders.slice(pageIndex * 10, (pageIndex + 1 ) * 10)

  return HttpResponse.json({
    orders: paginatedOrders,
    meta: {
      pageIndex: Math.floor(pageIndex / 10) + 1,
      perPage: 10,
      totalCount: filteredOrders.length,
    },
  })
})
