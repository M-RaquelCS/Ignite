import type { CancelOrderParams } from "@/api/orders/status/cancel-orders";
import { http, HttpResponse } from "msw";

export const cancelOrderMock = http.patch<CancelOrderParams, never, never>('/orders/:orderId/cancel/', async ({ params }) => {
  if ( params.orderId === 'error-order-id'){
    return new HttpResponse(null, { status: 400})
  }

  return new HttpResponse(null, { status: 204})

})