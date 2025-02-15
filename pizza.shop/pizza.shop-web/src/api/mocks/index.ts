import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './auth/sign-in-mock'
import { registerRestaurantMock } from './auth/register-restaurant-mock'
import { getDayOrdersAmountMock } from './dashboard/get-day-orders-amount-mock'
import { getMonthOrdersAmountMock } from './dashboard/get-month-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './dashboard/get-month-canceled-orders-amount-mock'
import { getMonthRevenueMock } from './dashboard/get-month-revenue-mock'
import { getDailyRevenueInPeriodMock } from './dashboard/get-daily-revenue-in-period-mock'
import { getPopularProductsMock } from './dashboard/get-popular-products-mock'
import { getOrdersMock } from './orders/get-orders-mock'
import { getOrderDetailsMock } from './orders/get-orders-details-mock'
import { approveOrderMock } from './orders/status/approve-orders-mock'
import { cancelOrderMock } from './orders/status/cancel-orders-mock'
import { deliverOrderMock } from './orders/status/deliver-order-mock'
import { dispatchOrderMock } from './orders/status/dispatch-order-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock
)

export async function enableWorker() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
