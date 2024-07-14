import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '../../../components/ui/button'
import { Dialog, DialogTrigger } from '../../../components/ui/dialog'
import { TableCell, TableRow } from '../../../components/ui/table'
import { OrderDetails } from './order-details'
import { OrderStatus } from '../../../components/status'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '../../../lib/react-query'
import { GetOrdersResponse } from '../../../api/orders/get-orders'
import { cancelOrder } from '../../../api/orders/status/cancel-orders'

interface OrderTableRowProps {
  order: {
    orderId: string;
    createdAt: string
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }
}

export function OrderTableRow({ order }: OrderTableRowProps) {

  const [showDetails, setShowDetails] = useState(false)

  function UpdateOrderStatusOnCache(orderId: string, status: OrderStatus) {
    // percorrer toda a lista de pedido, e quando encontrar o pedido com o ID
    // igual do que recebeu a ação cancelar, e alterar o status se não encontrar,
    // retorna o pedido sem alterar o status
    const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ['orders'],
    })

    ordersListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders?.map( order => {
          if ( order.orderId === orderId ) {
            return {...order, status }
          }

          return order
        })
      })
    })
  }

  const { mutateAsync: cancelFn } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }){
      UpdateOrderStatusOnCache(orderId, 'canceled')
    }
  })

  return (
    <TableRow>
      <TableCell>
        <Dialog open={showDetails} onOpenChange={setShowDetails}>
          <DialogTrigger asChild>
            <Button variant={'outline'} size={'icon'}>
              <Search className="h-4 w-4" />
              {/* Visivel apenas para o leitor de tela */}
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails open={showDetails} orderId={order.orderId} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">{(order.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        <Button variant={'outline'} size={'xs'}>
          <ArrowRight className="mr-2 h-4 w-4" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button 
          onClick={() => cancelFn({ orderId: order.orderId })} 
          disabled={!['processing', 'pending'].includes(order.status)} 
          variant={'ghost'} 
          size={'xs'}
        >
          <X className="mr-2 h-4 w-4" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
