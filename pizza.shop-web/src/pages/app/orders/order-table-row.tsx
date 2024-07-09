import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '../../../components/ui/button'
import { Dialog, DialogTrigger } from '../../../components/ui/dialog'
import { TableCell, TableRow } from '../../../components/ui/table'
import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={'outline'} size={'icon'}>
              <Search className="h-4 w-4" />
              {/* Visivel apenas para o leitor de tela */}
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        ad3123ewqsa
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 min</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Raquel Santos</TableCell>
      <TableCell className="font-medium">R$ 250.00</TableCell>
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