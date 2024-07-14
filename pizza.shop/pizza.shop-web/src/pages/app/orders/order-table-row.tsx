import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '../../../components/ui/button'
import { Dialog, DialogTrigger } from '../../../components/ui/dialog'
import { TableCell, TableRow } from '../../../components/ui/table'
import { OrderDetails } from './order-details'
import { OrderStatus } from '../../../components/status'
import { useState } from 'react'

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
        <Button variant={'ghost'} size={'xs'}>
          <X className="mr-2 h-4 w-4" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
